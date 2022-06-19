<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <datepicker-dropdown
                    v-model="minDateSync"
                    input-label="Від"
                />
            </v-col>
            <v-col>
                <datepicker-dropdown
                    v-model="maxDateSync"
                    input-label="До"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import DatepickerDropdown from '@/components/DatepickerDropdown';
export default {
    name: 'MeasuresChartControl',
    components: { DatepickerDropdown },
    props: {
        minDate: {
            type: String,
            default: null
        },
        maxDate: {
            type: String,
            default: null
        }
    },
    computed: {
        minDateSync: {
            get() {
                return this.minDate;
            },
            set(val) {
                this.$emit('update:min-date', val);
            }
        },
        maxDateSync: {
            get() {
                return this.maxDate;
            },
            set(val) {
                this.$emit('update:max-date', val);
            }
        }
    }
};
</script>