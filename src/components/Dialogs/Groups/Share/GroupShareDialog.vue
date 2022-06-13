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
import GroupUsersList from '@/components/Dialogs/Groups/Share/GroupUsersList';

export default {
    name: 'GroupShareDialog',
    mixins: [dialogMixin],
    components: { GroupUsersList, DialogActions },
    data: () => ({
        activationEvent: DIALOG_SHOW_GROUP_SHARE,

        title: '',
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
        }
    }
};
</script>