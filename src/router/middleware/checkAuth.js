import store from '@/store'

export default async (to, from, next) => {
    console.log(store.getters['auth/check'], store.getters['auth/token'])
    if (!store.getters['auth/check'] && store.getters['auth/token']) {
        await store.dispatch('auth/fetchUser')
    }

    next()
}