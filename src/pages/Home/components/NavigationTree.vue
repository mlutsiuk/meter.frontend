<template>
    <v-skeleton-loader
        :loading="loading"
        class="mx-auto"
        type="list-item@7"
    >
        <v-treeview
            :items="navigationTree"
            transition
            dense
            hoverable
            item-text="title"
        >
            <template #prepend="{ item }">
                <v-icon v-if="item.iconCode">
                    {{ item.iconCode }}
                </v-icon>
            </template>
        </v-treeview>
    </v-skeleton-loader>
</template>

<script>
export default {
    name: 'NavigationTree',
    data: () => ({
        loading: false,
        navigationTree: [
            {
                title: '1 Травня, 15'
            },
            {
                title: 'Село'
            },
            {
                title: 'Острог',
                children: [
                    {
                        title: 'Газ',
                        iconCode: 'mdi-fire'
                    },
                    {
                        title: 'Вода',
                        iconCode: 'mdi-water'
                    },
                    {
                        title: 'Газ',
                        iconCode: 'mdi-fire'
                    },
                    {
                        title: 'Вода',
                        iconCode: 'mdi-water'
                    },
                    {
                        title: 'Газ',
                        iconCode: 'mdi-fire'
                    },
                    {
                        title: 'Вода',
                        iconCode: 'mdi-water'
                    },
                    {
                        title: 'Газ',
                        iconCode: 'mdi-fire'
                    },
                    {
                        title: 'Вода',
                        iconCode: 'mdi-water'
                    },
                    {
                        title: 'Газ',
                        iconCode: 'mdi-fire'
                    },
                    {
                        title: 'Вода',
                        iconCode: 'mdi-water'
                    },
                    {
                        title: 'Газ',
                        iconCode: 'mdi-fire'
                    },
                    {
                        title: 'Вода',
                        iconCode: 'mdi-water'
                    }
                ]
            },
            {
                title: 'Острог',
                children: [
                    {
                        title: 'Газ',
                        iconCode: 'mdi-fire'
                    },
                    {
                        title: 'Вода',
                        iconCode: 'mdi-water'
                    },
                    {
                        title: 'Газ',
                        iconCode: 'mdi-fire'
                    },
                    {
                        title: 'Вода',
                        iconCode: 'mdi-water'
                    },
                    {
                        title: 'Газ',
                        iconCode: 'mdi-fire'
                    },
                    {
                        title: 'Вода',
                        iconCode: 'mdi-water'
                    },
                    {
                        title: 'Газ',
                        iconCode: 'mdi-fire'
                    },
                    {
                        title: 'Вода',
                        iconCode: 'mdi-water'
                    },
                    {
                        title: 'Газ',
                        iconCode: 'mdi-fire'
                    },
                    {
                        title: 'Вода',
                        iconCode: 'mdi-water'
                    },
                    {
                        title: 'Газ',
                        iconCode: 'mdi-fire'
                    },
                    {
                        title: 'Вода',
                        iconCode: 'mdi-water'
                    }
                ]
            }

        ],
        active: []
    })
};
</script>

<style scoped>

</style>