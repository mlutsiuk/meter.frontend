<template>
    <v-list-group
        prepend-icon="mdi-account-circle"
        :color="null"
    >
        <template #activator>
            <v-list-item-title>Мої групи</v-list-item-title>
        </template>

        <v-list-group
            v-for="group in groups"
            :key="group.id"
            :color="null"
            sub-group
        >
            <template #activator>
                <v-list-item-content>
                    <v-list-item-title v-text="group.title"/>
                </v-list-item-content>
            </template>

            <v-list-item v-if="group.counters.length === 0">
                <v-list-item-icon>
                    <v-icon>mdi-folder-question</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Група порожня</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item
                @dblclick="$router.push({ name: 'counters.show', params: { counterId: counter.id } })"
                v-else
                v-for="counter in group.counters"
                :key="counter.id"
                link
            >

                <v-list-item-icon>
                    <v-icon v-text="$store.getters['icon/find'](counter.iconId)?.code ?? 'mdi-clock-outline'" :color="counter.color"/>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title v-text="counter.title"/>
                    <v-list-item-subtitle v-if="counter.lastMeasure" v-text="counter.lastMeasure?.value"/>
                </v-list-item-content>
            </v-list-item>
        </v-list-group>

        <group-create-button/>
    </v-list-group>
</template>

<script>
import GroupCreateButton from './GroupCreateButton';
import axios from '@/plugins/axios';
import { PAGE_DASHBOARD_RELOAD } from '@/pages/Home/Dashboard/events';

export default {
    name: 'MyGroupsList',
    components: { GroupCreateButton },
    data: () => ({
        groups: []
    }),
    methods: {
        async reloadData() {

            await this.loadMyGroups();
        },
        async loadMyGroups() {
            this.groups = (await axios.get('/dashboard/my')).data;
        }
    },
    async created() {
        this.$store.dispatch('icon/fetch');

        this.$mitt.on(PAGE_DASHBOARD_RELOAD, this.reloadData);

        this.loading = true;
        await this.reloadData();
        this.loading = false;
    },
    beforeDestroy() {
        this.$mitt.off(PAGE_DASHBOARD_RELOAD, this.reloadData);
    }
};
</script>