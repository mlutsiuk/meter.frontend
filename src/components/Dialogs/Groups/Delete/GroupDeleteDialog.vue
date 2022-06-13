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

            <v-card-actions>
                <v-spacer/>
                <v-btn
                    @click="reject()"
                    :disabled="loading"
                    text
                >
                    Скасувати
                </v-btn>
                <v-btn
                    @click="confirm()"
                    :disabled="loading"
                    :loading="loading"
                    color="red darken-1"
                    text
                >
                    Видалити
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { DIALOG_SHOW_GROUP_DELETE } from '@/components/Dialogs/events';
import dialogMixin from '@/components/Dialogs/dialogMixin';

export default {
    name: 'GroupDeleteDialog',
    mixins: [dialogMixin],
    data: () => ({
        activationEvent: DIALOG_SHOW_GROUP_DELETE
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