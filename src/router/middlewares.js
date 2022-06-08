import { auth, checkAuth, guest, role } from './middleware';
import router from '@/router/index';

export const globalMiddleware = [
    checkAuth
];

export const routeMiddleware = {
    'auth': auth,
    'guest': guest,
    'role': role
};

/**
 * Merge the global middleware with the components' middleware.
 *
 * @param  {Array} components
 * @return {Array}
 */
export function getMiddlewareForComponents(components) {
    const middleware = [...globalMiddleware];

    components.filter(c => c.middleware).forEach(component => {
        if (Array.isArray(component.middleware)) {
            middleware.push(...component.middleware);
        } else {
            middleware.push(component.middleware);
        }
    });

    return middleware;
}

/**
 * Call each middleware.
 *
 * @param {Array} middleware
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
export function callMiddleware(middleware, to, from, next) {
    const stack = middleware.reverse();

    const _next = (...args) => {
        // Stop if "_next" was called with an argument or the stack is empty.
        if (args.length > 0 || stack.length === 0) {
            if (args.length > 0) {
                router.app.$loading.finish();
            }

            return next(...args);
        }

        const { middleware, params } = parseMiddleware(stack.pop());

        if (typeof middleware === 'function') {
            middleware(to, from, _next, params);
        } else if (routeMiddleware[middleware]) {
            routeMiddleware[middleware](to, from, _next, params);
        } else {
            throw Error(`Undefined middleware [${ middleware }]`);
        }
    };

    _next();
}

/**
 * @param  {String|Function} middleware
 * @return {Object}
 */
function parseMiddleware(middleware) {
    if (typeof middleware === 'function') {
        return { middleware };
    }

    const [name, params] = middleware.split(':');

    return { middleware: name, params };
}
