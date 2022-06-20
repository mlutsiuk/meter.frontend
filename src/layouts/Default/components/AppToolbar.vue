<template>
    <v-toolbar style="z-index: 1" elevation="3">
        <v-btn
            @click="$router.push({ name: 'dashboard' })"
            class="ml-1"
            icon
        >
            <v-icon>
                mdi-file-document-multiple
            </v-icon>
        </v-btn>
        <v-toolbar-title class="app-toolbar-title ml-n2">{{ appName }}</v-toolbar-title>

        <v-spacer/>

        <v-btn
            @click="openSearch()"
            icon
        >
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <theme-change-button/>

        <user-avatar-menu/>
    </v-toolbar>
</template>

<script>
import ThemeChangeButton from './ThemeChangeButton';
import UserAvatarMenu from './UserAvatarMenu';

export default {
    name: 'AppToolbar',
    components: {
        UserAvatarMenu,
        ThemeChangeButton
    },
    data: () => ({
        appName: process.env.VUE_APP_NAME
    }),
    methods: {
        openSearch() {
            this.$store.commit('message/push', {
                text: 'Наразі це не реалізовано',
                color: 'accent'
            });
        }
    }
};
</script>

<style scoped>
.app-toolbar-title {
    font-family: Nunito, sans-serif !important;
}
</style>