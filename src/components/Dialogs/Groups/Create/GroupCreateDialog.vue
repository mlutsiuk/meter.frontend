<template>
    <v-dialog
        @click:outside="close()"
        @keydown.esc="close()"
        v-model="active"
        max-width="500px"
        no-click-animation
        persistent
        scrollable
    >
        <v-card>
            <v-card-title>
                Створення групи
            </v-card-title>
            <v-card-text>
                <v-container fluid>
                    <validation-observer
                        ref="form"
                        slim
                    >
                        <validation-provider
                            v-slot="{ errors }"
                            name="Назва"
                            rules="required|min:1|max:35"
                            slim
                        >
                            <v-text-field
                                @keydown.enter="confirm()"
                                v-model="title"
                                :disabled="loading"
                                :error-messages="errors"
                                label="Назва"
                                placeholder="Квартира"
                            />
                        </validation-provider>
                    </validation-observer>
                </v-container>
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
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { DIALOG_SHOW_GROUP_CREATE } from '@/components/Dialogs/events';
import dialogMixin from '@/components/Dialogs/dialogMixin';
import DialogActions from '@/components/DialogActions';
import axios from '@/plugins/axios';

export default {
    name: 'GroupCreateDialog',
    mixins: [ dialogMixin ],
    components: {
        DialogActions,
        ValidationObserver,
        ValidationProvider
    },
    data: () => ({
        activationEvent: DIALOG_SHOW_GROUP_CREATE,

        title: ''
    }),
    methods: {
        async confirmed() {
            if (!await this.$refs.form.validate()) {
                return;
            }

            this.loading = true;

            await axios.post('/groups', {
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