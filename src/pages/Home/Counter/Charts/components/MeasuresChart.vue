<template>
    <Bar
        :chart-options="chartOptions"
        :chart-data="chartData"
        :height="150"
    />
</template>

<script>
import dayjs from 'dayjs';
import { Bar } from 'vue-chartjs/legacy';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import colors from 'vuetify/lib/util/colors'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
    name: 'MeasuresChart',
    components: {
        Bar
    },
    props: {
        measures: {
            type: Array,
            required: true
        }
    },
    data: () => ({
        chartOptions: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    min: 0,
                    max: 100
                }
            }
        }
    }),
    computed: {
        chartData() {
            let dates = [], values = [];

            this.measures.forEach(measure => {
                dates.push(dayjs(measure.date).format('DD.MM.YY'));
                values.push(measure.value);
            });

            return {
                labels: dates,
                datasets: [{
                    backgroundColor: colors.blueGrey.lighten2,
                    data: values
                }]
            };
        }
    },
    methods: {
        resetMinMax() {
            if(this.measures.length === 0) {
                this.chartOptions.scales.y.min = 0;
                this.chartOptions.scales.y.max = 100;
            }

            let minValue = this.measures[0].value,
                maxValue = this.measures[0].value;

            this.measures.forEach(measure => {
                if(measure.value > maxValue) {
                    maxValue = measure.value;
                }
                if(measure.value < minValue) {
                    minValue = measure.value;
                }
            });

            this.chartOptions.scales.y.min = minValue - 10;
            this.chartOptions.scales.y.max = maxValue + 10;
        }
    },
    watch: {
        measures() {
            this.resetMinMax();
        }
    },
    created() {
        this.resetMinMax();
    }
};
</script>