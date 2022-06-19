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

                    <page-child/>
                </v-card-text>
            </v-card>
        </v-skeleton-loader>
    </v-container>
</template>

<script>
import axios from '@/plugins/axios';
import PageChild from '@/pages/components/PageChild';

export default {
    name: 'CounterPage',
    components: { PageChild },
    data: () => ({
        loading: false,

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
        async loadCounter() {
            this.counter = (await axios.get(`/counters/${ this.counterId }`)).data;
        }
    },
    async created() {
        this.$store.dispatch('icon/fetch');

        this.loading = true;
        await this.loadCounter();
        this.loading = false;
    }
};
</script>