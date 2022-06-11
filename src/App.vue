<template>
    <v-app>
        <global-loading ref="loading"/>

        <transition name="page" mode="out-in">
            <component :is="layout" v-if="layout"/>
        </transition>

        <app-snackbar/>
    </v-app>
</template>

<script>
import AppSnackbar from '@/components/AppSnackbar';
import GlobalLoading from '@/components/GlobalLoading';
import { defaultLayout, layouts } from '@/layouts';

export default {
    components: { AppSnackbar, GlobalLoading },
    el: '#app',
    name: 'App',

    data: () => ({
        layout: null
    }),

    metaInfo() {
        const title = process.env.VUE_APP_NAME;
        return {
            title,
            titleTemplate: `%s · ${ title }`
        };
    },
    mounted() {
        this.$loading = this.$refs.loading;
    },
    methods: {
        /**
         * Set the application layout.
         *
         * @param {String} layout
         */
        setLayout(layout) {
            if (!layout || !layouts[layout]) {
                layout = defaultLayout;
            }
            this.layout = layouts[layout];
        }
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito');
</style>