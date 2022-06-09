<template>
    <v-container fluid>
        <v-row>
            <v-col cols="4" class="navigation-tree themed-scrollbar">
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
            </v-col>

            <v-divider vertical/>


        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'HomePage',

    // middleware: 'auth',
    metaInfo() {
        return { title: 'Головна' };
    },
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

<style lang="scss">
.navigation-tree {
    overflow-y: scroll;
    height: calc(100vh - 64px);
}
</style>