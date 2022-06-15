<template>
    <v-dialog
        @click:outside="close()"
        @keydown.esc="close()"
        v-model="active"
        max-width="310"
        no-click-animation
        persistent
    >
        <v-card>
            <v-card-title>
                Видалити групу?
            </v-card-title>
            <v-card-text>
                Після підтвердженя група буде видалена разом із усіма лічильниками.<br/>
                Ви справді бажаєте продовжити?
            </v-card-text>

            <dialog-actions
                @cancel="reject()"
                @confirm="confirm()"
                :loading="loading"
                confirm-text="Видалити"
                confirm-color="red darken-1"
            />
        </v-card>
    </v-dialog>
</template>

<script>
import { DIALOG_SHOW_GROUP_DELETE } from '@/components/Dialogs/events';
import dialogMixin from '@/components/Dialogs/dialogMixin';
import DialogActions from '@/components/DialogActions';
import axios from '@/plugins/axios';

export default {
    name: 'GroupDeleteDialog',
    components: { DialogActions },
    mixins: [ dialogMixin ],
    data: () => ({
        activationEvent: DIALOG_SHOW_GROUP_DELETE
    }),
    methods: {
        async confirmed() {
            this.loading = true;
            await axios.delete(`/groups/${this.payload.groupId}`);
            this.loading = false;

            await this.close();

            this.$store.commit('message/push', {
                text: 'Видалено',
                color: 'success'
            });
        }
    }
};
</script>