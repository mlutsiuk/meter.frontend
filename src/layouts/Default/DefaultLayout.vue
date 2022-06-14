<template>
    <div class="default-layout">
        <app-toolbar/>

        <v-main>
            <layout-child/>
        </v-main>

<!--        <app-footer/>-->
    </div>
</template>

<script>
// import AppFooter from './components/AppFooter';
import AppToolbar from './components/AppToolbar';
import LayoutChild from '@/layouts/components/LayoutChild';

export default {
    name: 'DefaultLayout',
    components: {
        LayoutChild,
        AppToolbar,
        // AppFooter
    }
};
</script>

<style lang="scss">
@import "@/assets/scss/_global.scss";

.default-layout {
    min-height: 100vh;
}
body {
    overflow: hidden;
}

body::-webkit-scrollbar {
    display: none;
}

body {
    -ms-overflow-style:none;
}
</style>