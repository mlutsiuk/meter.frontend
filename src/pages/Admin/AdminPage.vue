<template>
    <v-row class="pa-3">
        <v-col
            cols="3"
            class="scrollable-container align-stretch"
        >
            <admin-navigation/>
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
import PageChild from '@/pages/components/PageChild';
import AdminNavigation from './components/AdminNavigation';

export default {
    name: 'AdminPage',
    components: { AdminNavigation, PageChild }
};
</script>

<style scoped>
.scrollable-container {
    overflow-y: scroll;
    height: calc(100vh - 64px);
}
</style>