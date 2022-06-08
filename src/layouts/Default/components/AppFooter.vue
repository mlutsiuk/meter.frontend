<template>
    <v-footer
        app
        absolute
        padless
    >
        <v-card
            class="app-footer text-center"
            color="#343a40"
            flat
            tile
            width="100%"
        >
            <v-card-text class="mt-4">
                Meter
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text>
                © {{ firstYear }}&nbsp;<span v-if="currentYear !== firstYear">-&nbsp;{{ currentYear }}</span>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    name: 'AppFooter',
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