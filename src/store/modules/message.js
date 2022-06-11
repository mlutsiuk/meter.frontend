export default {
    namespaced: true,

    state: {
        messages: []
    },
    getters: {
        messages: state => state.messages,
        next: state => state.messages[0],
        count: state => state.messages.length
    },
    mutations: {
        push(state, { text, color }) {
            state.messages.push({
                text,
                color
            });
        },
        shift(state) {
            state.messages.shift();
        }
    }
};