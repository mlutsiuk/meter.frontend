<template>
    <v-btn
        class="mr-3"
        icon
    >
        <v-avatar v-if="avatar" size="40">
            <img :src="avatar" :alt="name">
        </v-avatar>

        <v-avatar v-else :color="avatarColor" size="40">
            <span class="text-h5 avatar-text" v-text="avatarText"/>
        </v-avatar>
    </v-btn>
</template>

<script>
export default {
    name: 'UserAvatar',
    props: {
        name: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            default: null
        }
    },
    computed: {
        avatarColor() {
            let hash = 0;

            for (let i = 0; i < this.name.length; i++) {
                hash = this.name.charCodeAt(i) + ((hash << 5) - hash);
            }

            const h = hash % 360;
            const s = 30;
            const l = 65;
            return `hsl(${ h }, ${ s }%, ${ l }%)`;
        },
        avatarText() {
            return this.name.charAt(0);
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