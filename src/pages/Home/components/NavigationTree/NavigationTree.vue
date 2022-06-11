<template>
    <v-skeleton-loader
        :loading="loading"
        type="list-item@8"
    >
        <v-list expand>
            <v-list-item @click="$router.push({ name: 'dashboard' })">
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>

                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <my-groups-list/>

            <v-divider/>

            <shared-groups-list/>
        </v-list>
    </v-skeleton-loader>
</template>

<script>
import MyGroupsList from '@/pages/Home/components/NavigationTree/MyGroupsList';
import SharedGroupsList from '@/pages/Home/components/NavigationTree/SharedGroupsList';

export default {
    name: 'NavigationTree',
    components: { SharedGroupsList, MyGroupsList },
    data: () => ({
        loading: false,

    })
};
</script>

<style scoped>

</style>