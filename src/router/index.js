import Vue from 'vue';
import Meta from 'vue-meta';
import Router from 'vue-router';
import { sync } from 'vuex-router-sync';
import store from '@/store';
import routes from './routes';
import { callMiddleware, getMiddlewareForComponents } from './middlewares';

Vue.use(Meta);
Vue.use(Router);

const router = createRouter();

sync(store, router);

export default router;

/**
 * Create a new router instance.
 *
 * @return {Router}
 */
function createRouter() {
    const router = new Router({
        scrollBehavior,
        mode: 'history',
        routes
    });

    router.beforeEach(beforeEach);
    router.afterEach(afterEach);

    return router;
}

/**
 * Global router guard.
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
async function beforeEach(to, from, next) {
    let components = [];

    try {
        // Get the matched components and resolve them.
        components = await resolveComponents(
            router.getMatchedComponents({ ...to })
        );
    } catch (error) {
        if (/^Loading( CSS)? chunk (\d)+ failed\./.test(error.message)) {
            window.location.reload();
            return;
        }
    }

    if (components.length === 0) {
        return next();
    }

    // Start the loading bar.
    if (components[components.length - 1].loading !== false) {
        router.app.$nextTick(() => router.app.$loading.start());
    }

    // Get the middleware for all the matched components.
    const middleware = getMiddlewareForComponents(components);

    // Call each middleware.
    callMiddleware(middleware, to, from, (...args) => {
        // Set the application layout only if "next()" was called with no args.
        if (args.length === 0) {
            router.app.setLayout(components[0].layout || '');
        }

        next(...args);
    });
}

/**
 * Global after hook.
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
// eslint-disable-next-line no-unused-vars
async function afterEach(to, from, next) {
    await router.app.$nextTick();

    router.app.$loading.finish();
}


/**
 * Resolve async components.
 *
 * @param  {Array} components
 * @return {Promise<Awaited<*>[]>}
 */
function resolveComponents(components) {
    return Promise.all(components.map(component => {
        return typeof component === 'function' ? component() : component;
    }));
}

/**
 * Scroll Behavior
 *
 * @link https://router.vuejs.org/en/advanced/scroll-behavior.html
 *
 * @param  {Route} to
 * @param  {Route} from
 * @param  {Object|undefined} savedPosition
 * @return {Object}
 */
function scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition;
    }

    if (to.hash) {
        return { selector: to.hash };
    }

    const [component] = router.getMatchedComponents({ ...to }).slice(-1);

    if (component && component.scrollToTop === false) {
        return {};
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ x: 0, y: 0 });
        }, 190);
    });
}