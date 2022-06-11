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
        ]
    },

    {
        path: '*',
        name: 'error.not-found',
        component: NotFoundPage
    }
];