import store from '@/store';
import Cookies from 'js-cookie';

export default async(to, from, next) => {
    if(!store.getters['auth/check']) {
        Cookies.set('intended_url', to.path);

        store.commit('message/push', {
            text: 'Для перегляду необхідно увійти.',
            color: 'warning'
        });
        next({ name: 'login' });
    } else {
        next();
    }
}