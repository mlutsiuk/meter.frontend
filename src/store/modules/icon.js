import axios from '@/plugins/axios';

export default {
    namespaced: true,

    state: {
        icons: [],

        loaded: false,
        loading: false
    },
    getters: {
        icons: state => state.icons,
        find: state => id => state.icons.find(icon => icon.id === id)
    },
    mutations: {
        set(state, icons) {
            state.icons = icons;
        },
        markAsLoaded(state) {
            state.loaded = true;
        },
        markAsLoading(state, isLoading = true) {
            state.loading = isLoading;
        }
    },
    actions: {
        async fetch({ state, commit }) {
            if (state.loaded || state.loading) {
                return;
            }

            commit('markAsLoading');
            try {
                const { data } = await axios.get('/icons');

                commit('set', data);
                commit('markAsLoaded');
            } catch (e) {
                commit('message/push', {
                    text: 'Сталася помилка при завантаженні списку іконок',
                    color: 'error'
                });
            }
            commit('markAsLoading', false);
        }
    }
};