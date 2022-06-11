<template>
    <v-card
        v-ripple
        class="counter-grid-cell"
        outlined
    >
        <v-card-text class="text-body-2 px-4 py-3 d-flex align-center">
            <v-icon
                v-text="icon"
                :color="color"
                class="pr-3"
                size="24"
            />
            <span class="font-weight-medium text-truncate pr-1" v-text="title"/>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'CountersGridCell',
    props: {
        color: {
            default: null,
            type: String
        },
        icon: {
            required: true,
            type: String
        },
        title: {
            required: true,
            type: String
        }
    }
};
</script>

<style scoped lang="scss">
.counter-grid-cell {
    border-color: var(--v-secondary-base);
    user-select: none;
}
</style>