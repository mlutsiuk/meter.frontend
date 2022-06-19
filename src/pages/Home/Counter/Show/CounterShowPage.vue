<template>
    <div>
        <measure-create-form
            @created="loadMeasures()"
            :counter-id="counterId"
            class="mt-3"
        />
        <measures-data-table
            :measures="measures"
        />
    </div>
</template>

<script>
import MeasuresDataTable from './components/MeasuresDataTable';
import MeasureCreateForm from './components/MeasureCreateForm';
import axios from '@/plugins/axios';

export default {
    name: 'CounterShowPage',
    components: { MeasureCreateForm, MeasuresDataTable },
    metaInfo: () => ({
        title: 'Заміри'
    }),
    props: {
        counterId: {
            type: Number,
            required: true
        }
    },
    data: () => ({
        measures: []
    }),
    methods: {
        async loadMeasures() {
            this.measures = (await axios.get(`/counters/${ this.counterId }/measures`)).data;
        }
    },
    async created() {
        await this.loadMeasures();
    }
};
</script>