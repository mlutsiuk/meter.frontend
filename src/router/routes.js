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
                path: 'groups/:groupId',
                name: 'groups.show',
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
            }
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