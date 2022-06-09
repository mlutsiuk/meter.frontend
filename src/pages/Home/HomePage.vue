<template>
    <v-container fluid>
        <v-row>
            <v-col
                cols="3"
                class="scrollable-container themed-scrollbar"
            >
                <navigation-tree/>
            </v-col>

            <v-divider vertical/>

            <v-col
                cols="9"
                class="scrollable-container themed-scrollbar"
            >
                <page-child/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import NavigationTree from './components/NavigationTree';
import PageChild from '@/pages/components/PageChild';

export default {
    name: 'HomePage',
    components: { PageChild, NavigationTree },
    // middleware: 'auth',
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