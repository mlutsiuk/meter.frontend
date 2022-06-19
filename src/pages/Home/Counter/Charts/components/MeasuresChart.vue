<template>
    <v-card outlined min-height="250px">
        <v-card-text>
            <h3 class="text-h3">Chart</h3>
            <v-list>
                <v-list-item v-for="measure in formattedMeasures" :key="measure.id">
                    {{ measure.date }} - {{ measure.value }}
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>

<script>
import { cloneDeep } from 'lodash-es';
import dayjs from 'dayjs';

export default {
    name: 'MeasuresChart',
    props: {
        measures: {
            type: Array,
            required: true
        }
    },
    computed: {
        formattedMeasures() {
            let measures = cloneDeep(this.measures);
            measures.forEach(measure => {
                measure.date = dayjs(measure.date).format('DD.MM.YY');
            });

            return measures;
        }
    }
};
</script>