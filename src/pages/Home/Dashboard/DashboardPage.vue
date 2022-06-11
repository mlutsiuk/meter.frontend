<template>
    <v-container fluid>
        <v-card
            v-for="group in groups"
            :key="group.id"
            class="my-4"
            outlined
        >
            <v-card-title v-text="group.title" class=""/>

            <v-card-text
                class="counters-grid"
            >
                <v-card
                    v-for="counter in group.counters"
                    :key="counter.id"
                    v-ripple
                    class="custom-counter ma-2"
                    outlined
                >
                    <v-card-text class="text-body-2 px-4 py-3 d-flex align-center counters-grid-cell">
                        <v-icon
                            v-text="counter.iconCode"
                            :color="counter.color"
                            class="pr-3"
                            size="24"
                        />
                        <span class="font-weight-medium text-truncate pr-1">{{ counter.title }}</span>
                    </v-card-text>
                </v-card>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'DashboardPage',
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

<style scoped lang="scss">
.text-transform-none {
    text-transform: none;
}

.custom-counter {
    border-color: var(--v-secondary-base);
    user-select: none;
}

.counters-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    justify-items: stretch;
}
.counters-grid-cell {
    max-width: 100%;
}
</style>