<template>
    <v-toolbar>
        <v-icon large class="mr-8">
            mdi-text-box-search-outline
        </v-icon>
        <v-toolbar-title class="app-toolbar-title">{{ appName }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
        <theme-change-button/>
    </v-toolbar>
</template>

<script>
import ThemeChangeButton from '@/layouts/Default/components/ThemeChangeButton';

export default {
    name: 'AppToolbar',
    components: {
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