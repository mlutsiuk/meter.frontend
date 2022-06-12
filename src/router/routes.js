import {
    DashboardPage, DevelopmentPage,
    HomePage,
    LoginPage,
    NonImplemented,
    NotFoundPage, SnackbarMessagesPage
} from '@/pages';

export default [
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/',
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
                path: 'groups/:groupId',
                name: 'groups.show',
                component: NonImplemented
            },
            {
                path: 'groups/:groupId/edit',
                name: 'groups.edit',
                component: NonImplemented
            },
            {
                path: 'groups/:groupId/share',
                name: 'groups.share',
                component: NonImplemented
            },

            {
                path: 'groups/:groupId/counters/create',
                name: 'groups.counters.create',
                component: NonImplemented
            },

            {
                path: 'counters/:counterId',
                name: 'counters.show',
                component: NonImplemented
            },
            {
                path: 'counters/:counterId/charts',
                name: 'counters.charts',
                component: NonImplemented
            },
            {
                path: 'counters/:counterId/edit',
                name: 'counters.edit',
                component: NonImplemented
            },
        ]
    },

    {
        path: '/development',
        component: DevelopmentPage,
        children: [
            {
                path: '',
                name: 'development',
                component: NonImplemented
            },
            {
                path: 'snackbar-messages',
                name: 'development.snackbar-messages',
                component: SnackbarMessagesPage
            }
            //TODO: Environment variables
        ]
    },

    {
        path: '*',
        name: 'error.not-found',
        component: NotFoundPage
    }
];