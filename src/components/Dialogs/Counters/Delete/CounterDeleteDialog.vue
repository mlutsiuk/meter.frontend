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
                Видалити лічильник?
            </v-card-title>
            <v-card-text>
                Після підтвердженя лічильник буде видалений разом із усіма записами.<br/>
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
import { DIALOG_SHOW_COUNTER_DELETE } from '@/components/Dialogs/events';
import dialogMixin from '@/components/Dialogs/dialogMixin';
import DialogActions from '@/components/DialogActions';

export default {
    name: 'CounterDeleteDialog',
    components: { DialogActions },
    mixins: [ dialogMixin ],
    data: () => ({
        activationEvent: DIALOG_SHOW_COUNTER_DELETE
    }),
    methods: {
        async confirmed() {
            this.loading = true;
            await new Promise(r => setTimeout(r, 2000));
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