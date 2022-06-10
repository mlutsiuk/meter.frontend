import {
    DashboardPage,
    HomePage,
    LoginPage,
    NonImplemented,
    NotFoundPage
} from '@/pages';

export default [
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/',
        name: 'home',
        component: HomePage,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: DashboardPage
            },
            {
                path: 'groups',
                name: 'groups.index',
                component: NonImplemented
            },
            {
                path: 'groups/create',
                name: 'groups.create',
                component: NonImplemented
            },
            {
                path: 'groups/:id',
                name: 'groups.show',
                component: NonImplemented
            },
            {
                path: 'groups/:id/edit',
                name: 'groups.edit',
                component: NonImplemented
            }
        ]
    },
    // {
    //     path: '/register',
    //     name: 'register',
    //     component: NonImplemented
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
        component: NotFoundPage
    }
];