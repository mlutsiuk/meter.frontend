<template>
    <v-container fluid class="pt-0">
        <group-card
            v-for="group in groups"
            :key="group.id"
            :group="group"
        />
    </v-container>
</template>

<script>
import GroupCard from '@/pages/Home/Dashboard/components/GroupCard';

export default {
    name: 'DashboardPage',
    components: {
        GroupCard
    },
    data: () => ({
        groups: [
            {
                id: 10,
                title: 'Село',
                ownerName: 'mlutsiuk',
                counters: [
                    {
                        id: 4,
                        title: 'Газ',
                        color: '#FF8A65',
                        iconCode: 'mdi-fire',
                        latestValue: 13575
                    },
                    {
                        id: 5,
                        title: 'Вода',
                        color: '#4FC3F7',
                        iconCode: 'mdi-water',
                        latestValue: 416
                    },
                    {
                        id: 6,
                        title: 'Електроенергія',
                        color: '#FFD54F',
                        iconCode: 'mdi-lightbulb',
                        latestValue: null
                    },
                    {
                        id: 7,
                        title: 'Дуже довга назва лічильника, яка по розміру завелика для контейнера',
                        color: '#FFD54F',
                        iconCode: 'mdi-lightbulb',
                        latestValue: null
                    },
                    {
                        id: 8,
                        title: 'Електроенергія',
                        color: '#FFD54F',
                        iconCode: 'mdi-lightbulb',
                        latestValue: null
                    },
                    {
                        id: 9,
                        title: 'Електроенергія',
                        color: '#FFD54F',
                        iconCode: 'mdi-lightbulb',
                        latestValue: null
                    }
                ]
            },
            {
                id: 11,
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
                id: 12,
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
    })
};
</script>