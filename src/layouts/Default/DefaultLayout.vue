<template>
    <div class="main-layout">
        <app-toolbar/>

        <v-main class="app-main">
            <v-container
                class="pa-6 white elevation-3"
                fluid
            >
                <layout-child ref="child"/>
            </v-container>
        </v-main>

        <app-footer/>
    </div>
</template>

<script>
import AppFooter from './components/AppFooter';
import AppToolbar from './components/AppToolbar';
import LayoutChild from '@/layouts/LayoutChild';

export default {
    name: 'DefaultLayout',
    components: {
        LayoutChild,
        AppToolbar,
        AppFooter,
    }
};
</script>

<style scoped>
.main-layout {
    background: #f8f9fa;
    min-height: 100vh;
}
</style>