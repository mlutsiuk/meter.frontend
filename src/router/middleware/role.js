import store from '@/store';

/**
 * This is middleware to check the current user role.
 *
 * middleware: 'role:admin,user',
 */

export default (to, from, next, roles) => {
    // Grab the user
    const user = store.getters['auth/user'];

    // Split roles into an array
    roles = roles.split(',');

    // Check if the user has one of the required roles...
    if(!roles.includes(user?.role.name)) {
        store.commit('message/push', {
            text: 'Доступ заборонено, недостатньо прав.',
            color: 'warning'
        });
        
        next('/');
    }

    next();
}