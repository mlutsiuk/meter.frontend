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
            :value="true"
            :color="null"
            sub-group
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

        <group-create-button/>
    </v-list-group>
</template>

<script>
import GroupCreateButton from '@/pages/Home/components/NavigationTree/GroupCreateButton';
export default {
    name: 'MyGroupsList',
    components: { GroupCreateButton },
    data: () => ({
            groups: [
                {
                    id: 1,
                    title: 'Село',
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
                    ]
                }
            ]

        })
};
</script>