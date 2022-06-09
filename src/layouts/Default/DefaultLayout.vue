<template>
    <div class="default-layout">
        <app-toolbar/>

        <v-main class="app-main">
            <layout-child ref="child"/>
        </v-main>

<!--        <app-footer/>-->
    </div>
</template>

<script>
// import AppFooter from './components/AppFooter';
import AppToolbar from './components/AppToolbar';
import LayoutChild from '@/layouts/LayoutChild';

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
.default-layout {
    min-height: 100vh;
}
body {
    overflow: hidden;
}

body::-webkit-scrollbar {
    display: none;
}

::-webkit-scrollbar-button {
    display: none;
}

body {
    -ms-overflow-style:none;
}

.theme--light .themed-scrollbar {
    &::-webkit-scrollbar {
        width: 15px;
    }

    &::-webkit-scrollbar-track {
        //background: #e6e6e6;
        //border-left: 1px solid #dadada;
        background: none;
    }

    &::-webkit-scrollbar-thumb {
        background: #b0b0b0;
        border: solid 3px #e6e6e6;
        border-radius: 7px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #757575;
    }
}

.theme--dark .themed-scrollbar {
    &::-webkit-scrollbar {
        width: 15px;
    }

    &::-webkit-scrollbar-track {
        //background: #202020;
        //border-left: 1px solid #2c2c2c;
        background: none;
    }

    &::-webkit-scrollbar-thumb {
        background: #3e3e3e;
        border: solid 3px #202020;
        border-radius: 7px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #757575;
    }
}
</style>