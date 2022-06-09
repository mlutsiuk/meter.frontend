<template>
    <div class="clear-layout d-flex flex-column align-center justify-center">
        <layout-child/>
    </div>
</template>

<script>
import LayoutChild from '@/layouts/components/LayoutChild';

export default {
    name: 'ClearLayout',
    components: { LayoutChild }
};
</script>

<style scoped>
.clear-layout {
    min-height: 100vh;
}
</style>