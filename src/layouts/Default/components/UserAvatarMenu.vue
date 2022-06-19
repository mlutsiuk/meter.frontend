<template>
    <v-menu
        close-on-content-click
        offset-y
        bottom
    >
        <template #activator="{ on, attrs }">
            <div
                v-on="on"
                v-bind="attrs"
            >
                <user-avatar
                    :name="$store.getters['auth/name'] ?? '?'"
                    :avatar="$store.getters['auth/avatar']"
                />
            </div>
        </template>

        <v-list>
            <v-list-item v-if="$store.getters['auth/isAdmin']" @click="$router.push({ name: 'admin' })">
                <v-list-item-title>Адміністрування</v-list-item-title>
            </v-list-item>

            <v-list-item @click="visitSetting()">
                <v-list-item-title>Налаштування</v-list-item-title>
            </v-list-item>

            <v-divider/>

            <v-list-item @click="logout()">
                <v-list-item-title>Вихід</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
import UserAvatar from '@/components/UserAvatar';

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