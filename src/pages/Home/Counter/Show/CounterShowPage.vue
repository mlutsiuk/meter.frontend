<template>
    <div>
        <measure-create-form
            @created="loadMeasures()"
            :counter-id="counterId"
            class="mt-3"
        />
        <measures-data-table
            :measures="measures"
            :loading="loading"
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
        measures: [],
        loading: false
    }),
    methods: {
        async loadMeasures() {
            this.loading = true;
            this.measures = (await axios.get(`/counters/${ this.counterId }/measures`)).data;
            this.loading = false;
        }
    },
    async created() {
        await this.loadMeasures();
    }
};
</script>