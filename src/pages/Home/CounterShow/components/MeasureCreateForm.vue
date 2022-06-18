<template>
    <validation-observer ref="form" slim>
        <v-row>
            <v-col cols="4">
                <validation-provider
                    v-slot="{ errors }"
                    name="Дата"
                    rules="required"
                >
                    <datepicker-dropdown
                        v-model="date"
                        :error-messages="errors"
                    />
                </validation-provider>
            </v-col>
            <v-col cols="4">
                <validation-provider
                    v-slot="{ errors }"
                    name="Значення"
                    rules="required|min:0|numeric"
                >
                    <v-text-field
                        v-model="value"
                        :error-messages="errors"
                        label="Значення"
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
import DatepickerDropdown from './DatepickerDropdown';
import dayjs from 'dayjs';
import axios from '@/plugins/axios';

export default {
    name: 'MeasureCreateForm',
    components: {
        DatepickerDropdown,
        ValidationObserver,
        ValidationProvider
    },
    props: {
        counterId: {
            type: Number,
            required: true
        }
    },
    data: () => ({
        value: null,
        date: dayjs().toISOString()
    }),
    methods: {
        async create() {
            if (!this.$refs.form.validate()) {
                return;
            }

            await axios.post('/measures', {
                counterId: this.counterId,
                date: this.date,
                value: this.value
            });

            this.$store.commit('message/push', {
                text: 'Додано',
                color: 'success'
            })

            this.$emit('created');
        }
    }
};
</script>