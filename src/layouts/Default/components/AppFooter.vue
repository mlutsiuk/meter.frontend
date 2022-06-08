<template>
    <v-footer
        app
        absolute
        padless
    >
        <v-card
            class="app-footer text-center"
            flat
            tile
            width="100%"
        >
            <v-card-text>
                <home-button/>
                <theme-change-button/>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text>
                ©&nbsp;{{ firstYear }}<span v-if="currentYear !== firstYear">&ndash;{{ currentYear }}</span>&nbsp;&mdash;&nbsp;<strong>Meter</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
import HomeButton from '@/layouts/Default/components/HomeButton';
import ThemeChangeButton from '@/layouts/Default/components/ThemeChangeButton';

export default {
    name: 'AppFooter',
    components: { ThemeChangeButton, HomeButton },
    data: () => ({
        firstYear: 2022,
        currentYear: new Date().getFullYear()
    })
};
</script>

<style scoped>
.app-footer * {
    color: #6c757d!important;
}
</style>