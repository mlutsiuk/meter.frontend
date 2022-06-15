<template>
    <v-dialog
        @click:outside="close()"
        @keydown.esc="close()"
        v-model="active"
        max-width="400px"
        no-click-animation
        persistent
    >
        <v-card>
            <v-card-title>
                Створення лічильника
            </v-card-title>
            <v-card-text>
                <validation-observer
                    ref="form"
                    slim
                >
                    <counter-create-edit-form
                        :loading="loading"
                        :title.sync="title"
                        :color.sync="color"
                        :icon-id.sync="iconId"
                    />
                </validation-observer>
            </v-card-text>

            <dialog-actions
                @cancel="reject()"
                @confirm="confirm()"
                :loading="loading"
                confirm-text="Створити"
                confirm-color="success"
            />
        </v-card>
    </v-dialog>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
import { DIALOG_SHOW_COUNTER_CREATE } from '@/components/Dialogs/events';
import dialogMixin from '@/components/Dialogs/dialogMixin';
import DialogActions from '@/components/DialogActions';
import axios from '@/plugins/axios';
import CounterCreateEditForm from '../components/CounterCreateEditForm';

export default {
    name: 'CounterCreateDialog',
    mixins: [ dialogMixin ],
    components: {
        CounterCreateEditForm,
        DialogActions,
        ValidationObserver
    },
    data: () => ({
        activationEvent: DIALOG_SHOW_COUNTER_CREATE,

        title: '',
        iconId: 1,
        color: '#4FC3F7'
    }),
    methods: {
        async confirmed() {
            if (!await this.$refs.form.validate()) {
                return;
            }

            this.loading = true;
            await axios.post('/counters', {
                color: this.color,
                groupId: this.payload.groupId,
                iconId: this.iconId,
                title: this.title
            });
            this.loading = false;

            await this.close();

            this.$store.commit('message/push', {
                text: 'Створено',
                color: 'success'
            });
        },
        async closing() {
            this.$refs.form.reset();
        }
    }
};
</script>