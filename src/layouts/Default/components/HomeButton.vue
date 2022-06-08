<template>
    <v-btn class="mx-4" icon>
        <v-icon size="24px" @click="$router.push({ name: 'home' })">
            mdi-home
        </v-icon>
    </v-btn>
</template>

<script>
export default {
    name: 'HomeButton'
};
</script>