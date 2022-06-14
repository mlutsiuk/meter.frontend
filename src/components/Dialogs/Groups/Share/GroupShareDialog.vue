<template>
    <v-dialog
        @click:outside="close()"
        @keydown.esc="close()"
        v-model="active"
        max-width="700px"
        no-click-animation
        persistent
        scrollable
    >
        <v-card>
            <v-card-title>
                Користувачі з доступом до групи
            </v-card-title>
            <v-card-text class="themed-scrollbar">
                <!-- TODO: Change filter function to search by name and email -->
                <v-autocomplete
                    v-model="newUser"
                    @input="userAdded()"
                    :items="users"
                    :menu-props="{ elevation: 5, transition: 'scroll-y-transition' }"
                    item-value="id"
                    item-text="name"
                    ref="usersAutocomplete"
                    placeholder="Додати користувача"
                    auto-select-first
                    filled
                    hide-details
                >
                    <template #item="{ item }">
                        <v-list-item-avatar>
                            <user-avatar
                                :name="item.name"
                                :avatar="item.avatar"
                            />
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title v-html="`@${item.name}`"/>
                            <v-list-item-subtitle v-html="item.email"/>
                        </v-list-item-content>
                    </template>
                </v-autocomplete>

                <group-users-list/>
            </v-card-text>

            <dialog-actions
                @cancel="reject()"
                @confirm="confirm()"
                :loading="loading"
                confirm-text="Зберегти"
            />
        </v-card>
    </v-dialog>
</template>

<script>
import { DIALOG_SHOW_GROUP_SHARE } from '@/components/Dialogs/events';
import dialogMixin from '@/components/Dialogs/dialogMixin';
import DialogActions from '@/components/DialogActions';
import GroupUsersList from './GroupUsersList';
import UserAvatar from '@/components/UserAvatar';

export default {
    name: 'GroupShareDialog',
    mixins: [ dialogMixin ],
    components: { UserAvatar, GroupUsersList, DialogActions },
    data: () => ({
        activationEvent: DIALOG_SHOW_GROUP_SHARE,

        newUser: null,

        users: [
            {
                id: 1,
                name: 'mlutsiuk',
                email: 'maksym.lutsiuk@oa.edu.ua',
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14GhtyXTxuNnk-nnO0wn5ycjlBmECHHAHePbGMCpbag=s88-p-k-rw-no'
            },
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

    }),
    methods: {
        async confirmed() {
            this.loading = true;
            await new Promise(r => setTimeout(r, 2000));
            this.loading = false;

            await this.close();

            this.$store.commit('message/push', {
                text: 'Збережено',
                color: 'success'
            });
        },
        userAdded() {
            console.log(this.newUser);
            this.$nextTick(() => {
                this.newUser = null;
                this.$refs.usersAutocomplete.blur();
                this.$store.commit('message/push', {
                    text: 'Користувача додано',
                    color: 'success'
                });
            });
        }
    }
};
</script>