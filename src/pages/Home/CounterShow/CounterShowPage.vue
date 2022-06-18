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
                    <v-icon :color="counter.color" v-text="iconCode"/>{{ counter.title }}
                </v-card-title>
                <v-card-subtitle>
                    <v-icon v-text="'mdi-account'" class="mx-1" small/>@{{ counter.ownerName }}<br>
                    <v-icon v-text="'mdi-home-group'" class="mx-1" small/>{{ counter.groupTitle }}
                </v-card-subtitle>
                <v-card-text>
                    <v-divider/>

                    <measure-create-form
                        @created="reload()"
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
import MeasuresDataTable from '@/pages/Home/CounterShow/components/MeasuresDataTable';
import MeasureCreateForm from '@/pages/Home/CounterShow/components/MeasureCreateForm';
import axios from '@/plugins/axios';
export default {
    name: 'CounterShowPage',
    components: { MeasureCreateForm, MeasuresDataTable },
    data: () => ({
        loading: false,

        measures: [
            {
                "id": 1,
                "date": "2022-06-25T17:40:46.805",
                "value": 13145,
                "counterId": 1
            }
        ],

        counter: {
            id: 3,
            title: 'Електроенергія',
            color: '#FFD54F',
            iconId: 1,
            groupTitle: 'Квартира',
            ownerName: 'mlutsiuk'
        }
    }),
    computed: {
        iconCode() {
            return this.$store.getters['icon/find'](this.counter?.iconId)?.code ?? 'mdi-clock-outline';
        },
        counterId() {
            return parseInt(this.$route.params.counterId);
        }
    },
    methods: {
        async reload() {
            // todo: this.measures = await axios.get(`/counters/${ this.counterId }/measures`)
            this.measures = (await axios.get(`/measures`)).data
        }
    },
    async created() {
        this.$store.dispatch('icon/fetch');

        this.loading = true;
        await this.reload();
        this.loading = false;
    }
};
</script>