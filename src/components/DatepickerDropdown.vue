<template>
    <v-menu
        v-model="isActiveDropdown"
        :close-on-content-click="false"
        min-width="290px"
        transition="scale-transition"
        offset-y
    >
        <template #activator="{ on, attrs }">
            <v-text-field
                v-bind="attrs"
                v-model="formattedDate"
                v-on="on"
                :disabled="disabled"
                :error-messages="errorMessages"
                :label="inputLabel"
                prepend-icon="mdi-calendar"
                clearable
                readonly
            />
        </template>
        <v-date-picker
            v-model="date"
            no-title
        />
    </v-menu>
</template>

<script>
import dayjs from 'dayjs';

export default {
    name: 'DatepickerDropdown',
    props: {
        value: {},
        errorMessages: {},
        inputLabel: {
            type: String,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        isActiveDropdown: false
    }),
    computed: {
        date: {
            get() {
                return this.value;
            },
            set(val) {
                this.isActiveDropdown = false;
                this.$emit('input', val);
            }
        },
        formattedDate: {
            get() {
                return this.date ? dayjs(this.date).format('DD.MM.YY') : '';
            },
            set(val) {
                this.date = val;
            }
        }
    }
};
</script>