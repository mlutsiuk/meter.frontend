<template>
    <v-menu
        :close-on-content-click="false"
        offset-y
        bottom
    >
        <template #activator="{ on, attrs }">
            <div
                v-on="on"
                v-bind="attrs"
            >
                <user-avatar/>
            </div>
        </template>

        <v-list>
            <v-list-item @click="visitSetting()">
                <v-list-item-title>Налаштування</v-list-item-title>
            </v-list-item>

            <v-list-item @click="logout()">
                <v-list-item-title>Вихід</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
import UserAvatar from './UserAvatar';

export default {
    name: 'UserAvatarMenu',
    components: {
        UserAvatar
    },
    methods: {
        visitSetting() {
            this.$store.commit('message/push', {
                text: 'Наразі це не реалізовано',
                color: 'accent'
            });
        },
        async logout() {
            await this.$store.dispatch('auth/logout');
            await this.$router.push({ name: 'login' });
        }
    }
};
</script>

<style scoped>

</style>