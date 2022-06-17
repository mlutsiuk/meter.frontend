<template>
    <v-container
        @contextmenu.prevent="$refs.contextmenu.show"
        class="pt-0"
        fluid
    >
        <group-card
            v-for="group in groups"
            :key="group.id"
            :group="group"
        />

        <context-menu ref="contextmenu">
            <context-menu-item icon="mdi-home-group-plus" @click="showGroupCreateDialog()">
                Створити групу
            </context-menu-item>
        </context-menu>
    </v-container>
</template>

<script>
import GroupCard from './components/GroupCard';
import ContextMenu from '@/components/ContextMenu';
import ContextMenuItem from '@/components/ContextMenuItem';
import { showGroupCreateDialog } from '@/components/Dialogs';
import axios from '@/plugins/axios';
import { PAGE_DASHBOARD_RELOAD } from './events';

export default {
    name: 'DashboardPage',
    components: {
        ContextMenuItem,
        ContextMenu,
        GroupCard
    },
    data: () => ({
        groups: []
    }),
    methods: {
        showGroupCreateDialog() {
            showGroupCreateDialog(() => this.$mitt.emit(PAGE_DASHBOARD_RELOAD));
        },

        reloadData() {
            this.loadMyGroups();
        },
        async loadMyGroups() {
            let groups = (await axios.get('/dashboard/my')).data;



            this.groups = groups;
        }
    },
    created() {
        this.reloadData();

        this.$mitt.on(PAGE_DASHBOARD_RELOAD, this.reloadData);
    },
    beforeDestroy() {
        this.$mitt.off(PAGE_DASHBOARD_RELOAD, this.reloadData);
    }
};

/*
[
    {
        id: 1,
        title: 'Село',
        ownerName: 'mlutsiuk',
        counters: [
            {
                id: 1,
                title: 'Газ',
                color: '#FF8A65',
                iconCode: 'mdi-fire',
                latestValue: 13575
            },
            {
                id: 2,
                title: 'Вода',
                color: '#4FC3F7',
                iconCode: 'mdi-water',
                latestValue: 416
            },
            {
                id: 3,
                title: 'Електроенергія',
                color: '#FFD54F',
                iconCode: 'mdi-lightbulb',
                latestValue: null
            },
            {
                id: 4,
                title: 'Дуже довга назва лічильника, яка по розміру завелика для контейнера',
                color: '#FFD54F',
                iconCode: 'mdi-lightbulb',
                latestValue: null
            },
            {
                id: 5,
                title: 'Електроенергія',
                color: '#FFD54F',
                iconCode: 'mdi-lightbulb',
                latestValue: null
            },
            {
                id: 6,
                title: 'Електроенергія',
                color: '#FFD54F',
                iconCode: 'mdi-lightbulb',
                latestValue: null
            }
        ]
    },
    {
        id: 2,
        title: 'Місто',
        ownerName: 'AnechkaR',
        counters: [
            {
                id: 21,
                title: 'Газ',
                color: '#FF8A65',
                iconCode: 'mdi-fire',
                latestValue: 13575
            },
            {
                id: 22,
                title: 'Вода',
                color: '#4FC3F7',
                iconCode: 'mdi-water',
                latestValue: 416
            },
            {
                id: 23,
                title: 'Електроенергія',
                color: '#FFD54F',
                iconCode: 'mdi-lightbulb',
                latestValue: null
            }
        ]
    },
    {
        id: 3,
        title: 'Квартира',
        ownerName: 'VanDeMiron',
        counters: [
            {
                id: 21,
                title: 'Газ',
                color: '#FF8A65',
                iconCode: 'mdi-fire',
                latestValue: 13575
            },
            {
                id: 22,
                title: 'Вода',
                color: '#4FC3F7',
                iconCode: 'mdi-water',
                latestValue: 416
            },
            {
                id: 23,
                title: 'Електроенергія',
                color: '#FFD54F',
                iconCode: 'mdi-lightbulb',
                latestValue: null
            }
        ]
    }
]

 */
</script>