<template>
    <v-list-item
        @click="$router.push({ name: 'groups.create' })"
    >
        <v-list-item-icon>
            <v-icon>
                mdi-plus
            </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
            <v-list-item-title>Створити групу</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
export default {
    name: 'GroupCreateButton'
};
</script>