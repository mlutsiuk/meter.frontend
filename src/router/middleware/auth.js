import store from '@/store';
import Cookies from 'js-cookie';

export default async(to, from, next) => {
    if(!store.getters['auth/check']) {
        Cookies.set('intended_url', to.path);    //TODO

        next({ name: 'login' });    //TODO
    } else {
        next();
    }
}