<template>
    <v-btn icon class="mr-3">
        <v-avatar v-if="$store.getters['auth/avatar']" size="40">
            <img :src="$store.getters['auth/avatar']" :alt="$store.getters['auth/name']">
        </v-avatar>

        <v-avatar v-else :color="avatarColor" size="40">
            <span class="text-h5 avatar-text" v-text="avatarText"/>
        </v-avatar>
    </v-btn>
</template>

<script>
export default {
    name: 'UserAvatar',
    computed: {
        avatarColor() {
            let hash = 0;
            let name = this.$store.getters['auth/name'] ?? '?';

            for (let i = 0; i < name.length; i++) {
                hash = name.charCodeAt(i) + ((hash << 5) - hash);
            }

            const h = hash % 360;
            const s = 30;
            const l = 65;
            return `hsl(${ h }, ${ s }%, ${ l }%)`;
        },
        avatarText() {
            return (this.$store.getters['auth/name'] ?? '?').charAt(0);
        }
    }
};
</script>

<style scoped>
.avatar-text {
    font-family: Nunito, sans-serif !important;
    text-transform: capitalize;
    color: white;
}
</style>