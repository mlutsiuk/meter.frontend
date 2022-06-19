import {
    CounterChartsPage,
    CounterPage,
    CounterShowPage,
    DashboardPage,
    DevelopmentPage,
    HomePage,
    LoginPage,
    NonImplemented,
    NotFoundPage,
    SnackbarMessagesPage
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
                path: 'counters/:counterId(\\d+)',
                component: CounterPage,
                children: [
                    {
                        path: '',
                        name: 'counters.show',
                        component: CounterShowPage,
                        props: route => ({ counterId: Number.parseInt(route.params.counterId, 10) })
                    },
                    {
                        path: 'charts',
                        name: 'counters.charts',
                        component: CounterChartsPage,
                        props: route => ({ counterId: Number.parseInt(route.params.counterId, 10) })
                    }
                ]
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