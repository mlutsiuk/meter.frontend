import {
    NonImplemented,
    NotFound
} from '@/pages';

export default [
    {
        path: '/',
        name: 'home',
        component: NonImplemented
    },
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: NonImplemented
    // },
    // {
    //     path: '/register',
    //     name: 'register',
    //     component: NonImplemented
    // },
    // {
    //     path: '/groups',
    //     name: 'groups.index',
    //     component: NonImplemented,
    //     children: [
    //         {
    //             path: '/:id',
    //             name: 'groups.show',
    //             component: NonImplemented
    //         },
    //         {
    //             path: '/:id/edit',
    //             name: 'groups.edit',
    //             component: NonImplemented
    //         }
    //     ],
    // },
    //
    // {
    //     path: '/counters',
    //     name: 'counters.index',
    //     component: NonImplemented,
    //     children: [
    //         {
    //             path: '/:id',
    //             name: 'counters.show',
    //             component: NonImplemented
    //         },
    //         {
    //             path: '/:id/edit',
    //             name: 'counters.edit',
    //             component: NonImplemented
    //         }
    //     ],
    // },

    {
        path: '*',
        name: 'error.not-found',
        component: NotFound
    }
];