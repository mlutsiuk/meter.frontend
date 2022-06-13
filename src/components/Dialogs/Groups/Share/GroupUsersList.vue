<template>
    <v-list two-line>
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
            },
            {
                id: 3,
                name: 'VanDeMiron',
                email: 'ivan.mirchenko@oa.edu.ua',
                avatar: null
            },
            {
                id: 4,
                name: 'Katerytska',
                email: 'kateryna.palichuk@oa.edu.ua',
                avatar: null
            },
            {
                id: 5,
                name: 'Funny_Spider',
                email: 'nazar.akusok@oa.edu.ua',
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14GjO0kxmDQPaNlgrFh6kShCAuw7yJ_DzcAkWFw-g=s88-p-k-rw-no'
            }
        ]
    })
};
</script>