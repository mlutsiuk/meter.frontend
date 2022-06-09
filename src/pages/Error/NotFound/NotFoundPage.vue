<template>
    <div class="default-layout-full-page d-flex justify-center align-center">
        <div class="d-flex align-center flex-column">
            <h1 id="error-page-caption" class="text-h1">404</h1>
            <div class="text--secondary text-subtitle-1">Сторінку не знайдено. Халепа!</div>

            <v-btn
                @click="$router.push({ name: 'home' })"
                class="mt-6"
                color="accent"
                elevation="2"
                large
                outlined
            >
                На базу
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFoundPage'
};
</script>

<style scoped>
.default-layout-full-page {
    height: calc(100vh - 64px);
}

#error-page-caption {
    font-family: Nunito, sans-serif !important;
}
</style>