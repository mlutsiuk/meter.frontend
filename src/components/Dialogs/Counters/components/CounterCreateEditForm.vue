<template>
    <v-container class="d-flex flex-column align-stretch" fluid>
        <validation-provider
            v-slot="{ errors }"
            name="Назва"
            rules="required|min:1|max:35"
            slim
        >
            <v-text-field
                v-model="titleSync"
                :disabled="loading"
                :error-messages="errors"
                label="Назва"
                placeholder="Електроенергія"
                maxlength="35"
                counter

            />
        </validation-provider>

        <v-card class="mb-4" flat outlined>
            <v-card-text class="d-flex flex-column">

                <validation-provider
                    v-slot="{ errors }"
                    name="Іконка"
                    rules="required"
                    slim
                >
                    <icon-autocomplete
                        v-model="iconIdSync"
                        :errorMessages="errors"
                        :color="color"
                    />
                </validation-provider>

                <counter-color-picker v-model="colorSync"/>
            </v-card-text>
        </v-card>

        <counters-grid-cell
            :color="color"
            :icon="iconCode"
            :title="title"
            disable-context-menu
        />
    </v-container>
</template>

<script>
import CountersGridCell from '@/pages/Home/Dashboard/components/CountersGridCell';
import CounterColorPicker from './CounterColorPicker';
import IconAutocomplete from './IconAutocomplete';
import { ValidationProvider } from 'vee-validate';

export default {
    name: 'CounterCreateEditForm',
    components: { IconAutocomplete, CounterColorPicker, CountersGridCell, ValidationProvider },
    props: {
        title: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        iconId: {
            type: Number,
            required: true
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        titleSync: {
            get() {
                return this.title;
            },
            set(val) {
                this.$emit('update:title', val);
            }
        },
        colorSync: {
            get() {
                return this.color;
            },
            set(val) {
                this.$emit('update:color', val);
            }
        },
        iconIdSync: {
            get() {
                return this.iconId;
            },
            set(val) {
                this.$emit('update:icon-id', val);
            }
        },

        iconCode() {
            return this.$store.getters['icon/find'](this.iconId)?.code ?? 'mdi-clock-outline';
        }

    }
};
</script>