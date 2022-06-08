<template>
    <transition name="page" mode="out-in">
        <slot>
            <router-view ref="routerView"/>
        </slot>
    </transition>
</template>

<script>
export default {
    name: 'LayoutChild'
};
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
    transition: opacity .2s;
}

.page-enter,
.page-leave-to {
    opacity: 0;
}
</style>