<template>
    <v-list>
        <v-list-item @click="$router.push({ name: 'admin' })">
            <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Головна</v-list-item-title>
        </v-list-item>

        <v-divider/>

        <v-list-item
            @dblclick="$router.push({ name: 'admin.icons' })"
            link
        >

            <v-list-item-icon>
                <v-icon>mdi-star-circle</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>Іконки</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
export default {
    name: 'AdminNavigation'
};
</script>