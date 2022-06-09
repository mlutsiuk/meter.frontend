<template>
    <transition name="fade" mode="out-in">
        <slot>
            <router-view/>
        </slot>
    </transition>
</template>

<script>
export default {
    name: 'PageChild'
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .15s
}
.fade-enter,
.fade-leave-to {
    opacity: 0
}
</style>