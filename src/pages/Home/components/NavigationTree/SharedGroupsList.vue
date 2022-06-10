<template>
    <v-list-group
        prepend-icon="mdi-account-group"
        v-model="active"
        :color="null"
    >
        <template #activator>
            <v-list-item-title>Доступні групи</v-list-item-title>
        </template>

        <v-list-group
            v-for="group in groups"
            :key="group.id"
            no-action
            sub-group
            :color="null"
        >
            <template #activator>
                <v-list-item-content>
                    <v-list-item-title v-text="group.title"/>
                </v-list-item-content>
            </template>

            <v-list-item
                v-for="counter in group.counters"
                :key="counter.id"
                link
            >
                <v-list-item-icon>
                    <v-icon v-text="counter.iconCode" :color="counter.color"/>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title v-text="counter.title"/>
                    <v-list-item-subtitle v-if="counter.latestValue" v-text="counter.latestValue"/>
                </v-list-item-content>
            </v-list-item>
        </v-list-group>
    </v-list-group>
</template>

<script>
export default {
    name: 'SharedGroupsList',
    data: () => ({
        active: false,
        groups: [
            {
                id: 10,
                title: 'Село',
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
                ]
            },
            {
                id: 11,
                title: 'Місто',
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
                    },
                ]
            },
            {
                id: 11,
                title: 'Квартира',
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
                    },
                ]
            }

        ]
    })
};
</script>