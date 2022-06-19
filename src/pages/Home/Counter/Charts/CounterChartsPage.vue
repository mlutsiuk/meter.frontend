<template>
    <v-container fluid class="px-0">
        <v-btn
            v-if="measures.length === 0"
            @click="$router.push({ name: 'counters.show', params: { counterId } })"
            style="min-height: 100px"
            block
            text
        >
            <v-icon>mdi-plus</v-icon>
            Записи відсутні, створіть перший на сторінці лічильника
        </v-btn>

        <div v-else>
            <measures-chart-control
                :min-date.sync="minDate"
                :max-date.sync="maxDate"
            />

            <measures-chart
                :measures="constrainedMeasures"
            />
        </div>
    </v-container>
</template>

<script>
import axios from '@/plugins/axios';
import MeasuresChartControl from './components/MeasuresChartControl';
import MeasuresChart from './components/MeasuresChart';
import dayjs from 'dayjs';

export default {
    name: 'CounterChartsPage',
    components: { MeasuresChart, MeasuresChartControl },
    metaInfo: () => ({
        title: 'Графіки'
    }),
    props: {
        counterId: {
            type: Number,
            required: true
        }
    },
    data: () => ({
        measures: [],

        minDate: null,
        maxDate: null
    }),
    computed: {
        constrainedMeasures() {
            if (!this.minDate && !this.maxDate) {
                return this.measures;
            }

            return this.measures.filter(measure => {
                return (this.minDate
                    ? dayjs(measure.date).isAfter(dayjs(this.minDate))
                    : true
                ) && (this.maxDate
                    ? dayjs(measure.date).isBefore(this.maxDate)
                    : true
                );
            });
        }
    },
    methods: {
        async loadMeasures() {
            let measures = (await axios.get(`/counters/${ this.counterId }/measures`)).data;

            measures.sort(function (a, b) {
                return dayjs(a.date).diff(dayjs(b.date));
            });

            this.measures = measures;
        }
    },
    async created() {
        await this.loadMeasures();
    }
};
</script>