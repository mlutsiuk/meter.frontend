<template>
    <v-data-table
        :headers="headers"
        :items="measures"
        :items-per-page="5"
        class="elevation-1"
        sort-by="date"
        must-sort
        sort-desc
    >
        <template v-slot:[`item.date`]="{ item }">
            {{ formatDate(item.date) }}
        </template>
    </v-data-table>
</template>

<script>
import dayjs from 'dayjs';

export default {
    name: 'MeasuresDataTable',
    props: {
        measures: {
            type: Array,
            required: true
        }
    },
    data: () => ({
        headers: [
            {
                text: 'Id',
                align: 'start',
                sortable: false,
                value: 'id'
            },
            { text: 'Дата', value: 'date' },
            { text: 'Значення', value: 'value' }
        ]
    }),
    methods: {
        formatDate(val) {
            return dayjs(val).format('DD.MM.YY');
        }
    }
};
</script>