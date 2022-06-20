<template>
    <v-btn
        @click="changeTheme()"
        :fab="fab"
        class="mx-4"
        icon
    >
        <v-icon size="24px">
            {{ icon }}
        </v-icon>
    </v-btn>
</template>

<script>
import Cookies from 'js-cookie';

export default {
    name: 'ThemeChangeButton',
    props: {
        fab: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        dark: {
            get() {
                return this.$vuetify.theme.dark;
            },
            set(val) {
                Cookies.set('theme', (val ? 'dark' : 'light'));
                this.$vuetify.theme.dark = val;
            }
        },
        icon() {
            return this.dark ? 'mdi-weather-night' : 'mdi-white-balance-sunny';
        }
    },
    methods: {
        changeTheme() {
            this.dark = !this.dark;
        }
    }
};
</script>