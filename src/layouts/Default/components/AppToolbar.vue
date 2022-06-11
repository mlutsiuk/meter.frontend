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
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
        <theme-change-button/>

        <user-avatar/>
    </v-toolbar>
</template>

<script>
import ThemeChangeButton from '@/layouts/Default/components/ThemeChangeButton';
import UserAvatar from '@/layouts/Default/components/UserAvatar';

export default {
    name: 'AppToolbar',
    components: {
        UserAvatar,
        ThemeChangeButton
    },
    data: () => ({
        appName: process.env.VUE_APP_NAME
    })
};
</script>

<style scoped>
.app-toolbar-title {
    font-family: Nunito, sans-serif !important;
}
</style>