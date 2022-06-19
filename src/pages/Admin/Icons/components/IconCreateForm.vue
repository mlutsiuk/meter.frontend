<template>
    <validation-observer ref="form" slim>
        <v-row>
            <v-col cols="4">
                <validation-provider
                    v-slot="{ errors }"
                    name="Значення"
                    rules="required|min:1"
                >
                    <v-text-field
                        v-model="iconCode"
                        :error-messages="errors"
                        :append-outer-icon="prefixedIconCode"
                        label="Код іконки"
                        prefix="mdi-"
                    />
                </validation-provider>
            </v-col>
            <v-col cols="2" class="d-flex align-center">
                <v-btn
                    @click="create()"
                    block
                >
                    <v-icon>
                        mdi-plus
                    </v-icon>
                    Додати
                </v-btn>
            </v-col>
        </v-row>
    </validation-observer>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import axios from '@/plugins/axios';

export default {
    name: 'IconCreateForm',
    components: {
        ValidationObserver,
        ValidationProvider
    },
    data: () => ({
        iconCode: null
    }),
    computed: {
        prefixedIconCode() {
            return `mdi-${this.iconCode}`;
        }
    },
    methods: {
        resetForm() {
            this.iconCode = 'fire';
        },
        async create() {
            if (!this.$refs.form.validate()) {
                return;
            }

            await axios.post('/icons', {
                code: this.prefixedIconCode
            });

            this.resetForm();
            this.$refs.form.reset();

            this.$store.commit('message/push', {
                text: 'Додано',
                color: 'success'
            });

            this.$emit('created');
        }
    },
    created() {
        this.resetForm();
    }
};
</script>