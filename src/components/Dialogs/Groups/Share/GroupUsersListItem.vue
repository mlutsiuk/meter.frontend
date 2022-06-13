<template>
    <v-list-item>
        <v-list-item-avatar>
            <user-avatar
                :name="user.name"
                :avatar="user.avatar"
            />
        </v-list-item-avatar>

        <v-list-item-content>
            <v-list-item-title>@{{ user.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
            <v-list-item-action-text v-if="owner">
                Власник
            </v-list-item-action-text>

            <v-select
                v-if="!owner"
                v-model="canEdit"
                :items="accessTypes"
                :menu-props="{ bottom: true, offsetY: true}"
                style="max-width: 160px"
                hide-details
                dense
                flat
                solo
            />
        </v-list-item-action>
    </v-list-item>
</template>

<script>
import UserAvatar from '@/components/UserAvatar';

export default {
    name: 'GroupUsersListItem',
    components: {
        UserAvatar
    },
    props: {
        user: {
            type: Object,
            required: true
        },
        owner: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        accessTypes: [
            { value: false, text: 'Перегляд',  },
            { value: true, text: 'Редагування' }
        ],
        // Boolean, true - can edit, false - can't
        canEdit: false
    })
};
</script>