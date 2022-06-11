import axios from '@/plugins/axios';
import Cookies from 'js-cookie';

export default {
    namespaced: true,

    state: {
        user: null,
        token: Cookies.get('token') ?? null
    },
    getters: {
        user: state => state.user,
        avatar: state => state.user?.avatar,
        name: state => state.user?.name,

        token: state => state.token,

        check: state => state.user !== null,

        roleName: state => state.user?.role?.name,
        isAdmin: (state, getters) => getters.roleName === 'admin'
    },
    mutations: {
        fetchUserSuccess(state, user) {
            state.user = user;
        },
        fetchUserFailure(state) {
            state.token = null;
            Cookies.remove('token');
        },

        saveToken(state, token) {
            state.token = token;
            Cookies.set('token', token);
        },
        logout(state) {
            state.user = null;
            state.token = null;

            Cookies.remove('token');
        }
    },
    actions: {
        saveToken({ commit }, token) {
            commit('saveToken', token);
        },
        async fetchUser({ commit }) {
            try {
                const { data } = await axios.get('/auth/current');

                commit('fetchUserSuccess', data);
            } catch (e) {
                commit('fetchUserFailure');
            }
        },
        async logout({ commit }) {
            commit('logout');
        }
    }
};