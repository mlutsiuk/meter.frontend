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

            <v-card-actions>
                <v-spacer></v-spacer>
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
import { DIALOG_SHOW_COUNTER_DELETE } from '@/components/Dialogs/events';
import dialogMixin from './dialogMixin';

export default {
    name: 'CounterDeleteDialog',
    mixins: [dialogMixin],
    data: () => ({
        activationEvent: DIALOG_SHOW_COUNTER_DELETE
    }),
    methods: {
        async confirmed() {
            console.log(`Making delete request for counter with id ${ this.payload.counterId }`);

            this.loading = true;
            await new Promise(r => setTimeout(r, 2000));
            this.loading = false;

            console.log('Request successful, closing dialog');
            this.close();
        }
    }
};
</script>