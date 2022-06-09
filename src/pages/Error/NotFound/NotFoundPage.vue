<template>
    <v-container class="text-center">
        <h1 class="text-h1">404</h1>
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
    </v-container>
</template>

<script>
export default {
    name: 'NotFoundPage'
};
</script>