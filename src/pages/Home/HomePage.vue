<template>
    <v-row class="pa-3">
        <v-col
            cols="3"
            class="scrollable-container align-stretch"
        >
            <navigation-tree/>
        </v-col>

        <v-divider vertical/>

        <v-col
            cols="9"
            class="scrollable-container d-flex align-stretch"
        >
            <page-child/>
        </v-col>
    </v-row>
</template>

<script>
import NavigationTree from './components/NavigationTree/NavigationTree';
import PageChild from '@/pages/components/PageChild';

export default {
    name: 'HomePage',
    components: {
        PageChild,
        NavigationTree
    },
    middleware: 'auth',
    metaInfo: () => ({
        title: 'Головна'
    })
};
</script>

<style scoped>
.scrollable-container {
    overflow-y: scroll;
    height: calc(100vh - 64px);
}
</style>