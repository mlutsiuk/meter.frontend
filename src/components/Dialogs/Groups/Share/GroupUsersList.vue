<template>
    <v-list>
        <group-users-list-item
            :user="owner"
            owner
        />
        <v-divider
            v-if="users.length > 0"
            inset
        />

        <div v-for="(user, index) in users" :key="user.id">
            <group-users-list-item
                :user="user"
            />

            <v-divider
                v-if="index < (users.length - 1)"
                inset
            />
        </div>
    </v-list>
</template>

<script>
import GroupUsersListItem from './GroupUsersListItem';

export default {
    name: 'GroupUsersList',
    components: {
        GroupUsersListItem
    },
    data: () => ({
        owner: {
            id: 1,
            name: 'mlutsiuk',
            email: 'maksym.lutsiuk@oa.edu.ua',
            avatar: 'https://lh3.googleusercontent.com/a-/AOh14GhtyXTxuNnk-nnO0wn5ycjlBmECHHAHePbGMCpbag=s88-p-k-rw-no'
        },

        users: [
            {
                id: 2,
                name: 'AnechkaR',
                email: 'anna.romaniuk@oa.edu.ua',
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14GjuMP3JzbdWcK1esUSZqIVRRNKMwX8RJ9QX84k6Jw=s88-p-k-rw-no'
            }
        ]
    })
};
</script>