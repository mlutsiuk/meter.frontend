<template>
    <v-container class="pt-0" fluid>
        <v-card outlined>
            <v-card-title>
                <h3 class="text-h3">Іконки</h3>
            </v-card-title>

            <v-card-text>
                <icon-create-form @created="$refs.list.reload()"/>
                <v-divider/>

                <icons-table ref="list"/>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import IconCreateForm from './components/IconCreateForm';
import IconsTable from './components/IconsTable';

export default {
    name: 'IconsPage',
    components: { IconsTable, IconCreateForm },

};
</script>