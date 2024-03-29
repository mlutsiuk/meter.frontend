<template>
    <v-dialog
        @click:outside="close()"
        @keydown.esc="close()"
        v-model="active"
        max-width="400px"
        no-click-animation
        persistent
        scrollable
    >
        <v-card>
            <v-card-title>
                Редагування лічильника
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
                confirm-text="Зберегти"
                confirm-color="success"
            />
        </v-card>
    </v-dialog>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
import { DIALOG_SHOW_COUNTER_EDIT } from '@/components/Dialogs/events';
import dialogMixin from '@/components/Dialogs/dialogMixin';
import DialogActions from '@/components/DialogActions';
import axios from '@/plugins/axios';
import CounterCreateEditForm from '../components/CounterCreateEditForm';

export default {
    name: 'CounterEditDialog',
    mixins: [ dialogMixin ],
    components: {
        CounterCreateEditForm,
        DialogActions,
        ValidationObserver
    },
    data: () => ({
        activationEvent: DIALOG_SHOW_COUNTER_EDIT,

        title: '',
        iconId: 1,
        color: '#4FC3F7'
    }),
    methods: {
        async activated() {
            const { title, color, iconId } = (await axios.get(`/counters/${ this.payload.counterId }`)).data;

            this.title = title;
            this.color = color;
            this.iconId = iconId;
        },
        async confirmed() {
            if (!await this.$refs.form.validate()) {
                return;
            }

            this.loading = true;
            await axios.patch(`/counters/${ this.payload.counterId }`, {
                color: this.color,
                iconId: this.iconId,
                title: this.title
            });
            this.loading = false;

            await this.close();

            this.$store.commit('message/push', {
                text: 'Збережено',
                color: 'success'
            });
        },
        async closing() {
            this.$refs.form.reset();

            this.title = '';
            this.iconId = 1;
            this.color = '#4FC3F7';
        }
    }
};
</script>