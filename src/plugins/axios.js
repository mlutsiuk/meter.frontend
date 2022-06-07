import axios from 'axios';
import store from '@/store';

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,

    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
    // withCredentials: true
});

axiosInstance.interceptors.request.use(request => {
    const token = store.getters['auth/token'];
    if (token) {
        request.headers.common.Authorization = `Bearer ${ token }`;
    }

    return request;
});

axiosInstance.interceptors.response.use(response => response, async error => {
    const { status } = error.response;
    if (status === 401 && store.getters['auth/check']) {
        await store.dispatch('auth/logout');

        // TODO: router.push({ name: 'login' });
    }
});

export default axiosInstance;