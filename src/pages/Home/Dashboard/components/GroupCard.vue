<template>
    <v-card
        class="mb-4"
        outlined
    >
        <v-card-title v-text="group.title"/>

        <v-card-text class="counters-grid">
            <counters-grid-cell
                v-for="counter in group.counters"
                :key="counter.id"
                :color="counter.color"
                :icon="counter.iconCode"
                :title="counter.title"
            />
        </v-card-text>
    </v-card>
</template>

<script>
import CountersGridCell from './CountersGridCell';

export default {
    name: 'GroupCard',
    components: {
        CountersGridCell
    },
    props: {
        group: {
            required: true,
            type: Object
        }
    }
};
</script>

<style scoped>
.counters-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    justify-items: stretch;
}
</style>