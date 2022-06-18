<template>
    <v-container
        class="pt-0"
        fluid
    >
        <v-skeleton-loader
            :loading="loading"
            type="card-heading, divider, table"
        >
            <v-card>
                <v-card-title class="text-h4">
                    <v-icon :color="counter.color" v-text="iconCode"/>
                    {{ counter.title }}
                </v-card-title>
                <v-card-subtitle>
                    <v-icon v-text="'mdi-account'" class="mx-1" small/>
                    @{{ ownerName }}<br>
                    <v-icon v-text="'mdi-home-group'" class="mx-1" small/>
                    {{ groupTitle }}
                </v-card-subtitle>
                <v-card-text>
                    <v-divider/>

                    <measure-create-form
                        @created="loadMeasures()"
                        :counter-id="counterId"
                        class="mt-3"
                    />
                    <measures-data-table
                        :measures="measures"
                    />
                </v-card-text>
            </v-card>
        </v-skeleton-loader>
    </v-container>
</template>

<script>
import MeasuresDataTable from './components/MeasuresDataTable';
import MeasureCreateForm from './components/MeasureCreateForm';
import axios from '@/plugins/axios';

export default {
    name: 'CounterShowPage',
    components: { MeasureCreateForm, MeasuresDataTable },
    data: () => ({
        loading: false,

        measures: [],
        counter: {}
    }),
    computed: {
        iconCode() {
            return this.$store.getters['icon/find'](this.counter?.iconId)?.code ?? 'mdi-clock-outline';
        },
        counterId() {
            return parseInt(this.$route.params.counterId);
        },
        ownerName() {
            return this.counter?.group?.owner?.name
        },
        groupTitle() {
            return this.counter?.group?.title;
        }
    },
    methods: {
        async loadMeasures() {
            this.measures = (await axios.get(`/counters/${ this.counterId }/measures`)).data;
        },
        async loadCounter() {
            this.counter = (await axios.get(`/counters/${ this.counterId }`)).data;
        }
    },
    async created() {
        this.$store.dispatch('icon/fetch');

        this.loading = true;
        await this.loadCounter();
        await this.loadMeasures();
        this.loading = false;
    }
};
</script>