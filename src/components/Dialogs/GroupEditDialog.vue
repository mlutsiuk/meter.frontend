<template>
    <v-dialog
        @click:outside="close()"
        @keydown.esc="close()"
        v-model="active"
        max-width="500px"
        no-click-animation
        persistent
    >
        <v-card>
            <v-card-title>
                Редагування групи
            </v-card-title>
            <v-card-text>
                <v-container fluid>
                    <validation-observer
                        ref="form"
                        slim
                    >
                        <validation-provider
                            v-slot="{ errors }"
                            name="Email"
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
                    color="success"
                    text
                >
                    Зберегти
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { DIALOG_SHOW_GROUP_EDIT } from '@/components/Dialogs/events';
import dialogMixin from './dialogMixin';

export default {
    name: 'GroupEditDialog',
    mixins: [dialogMixin],
    components: {
        ValidationObserver,
        ValidationProvider
    },
    data: () => ({
        activationEvent: DIALOG_SHOW_GROUP_EDIT,

        title: ''
    }),
    methods: {
        async confirmed() {
            if (!await this.$refs.form.validate()) {
                return;
            }

            this.loading = true;
            await new Promise(r => setTimeout(r, 2000));
            this.loading = false;

            await this.close();

            this.$store.commit('message/push', {
                text: 'Збережено',
                color: 'success'
            });
        },
        async closing() {
            this.$refs.form.reset();
        }
    }
};
</script>