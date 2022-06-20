<template>
    <div class="clear-layout d-flex flex-column align-center justify-center">
        <theme-change-button
            class="theme-change-button"
            fab
        />
        <layout-child/>
    </div>
</template>

<script>
import LayoutChild from '@/layouts/components/LayoutChild';
import ThemeChangeButton from '@/layouts/Default/components/ThemeChangeButton';

export default {
    name: 'ClearLayout',
    components: { ThemeChangeButton, LayoutChild }
};
</script>

<style scoped>
.clear-layout {
    min-height: 100vh;
}

.theme-change-button {
    position: fixed;
    top: 8px;
    right: 0;
}
</style>