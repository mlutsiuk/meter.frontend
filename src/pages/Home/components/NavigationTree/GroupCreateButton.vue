<template>
    <v-list-item
        @click="showGroupCreateDialog()"
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
import { showGroupCreateDialog } from '@/components/Dialogs';

export default {
    name: 'GroupCreateButton',
    methods: {
        showGroupCreateDialog() {
            showGroupCreateDialog();
        }
    }
};
</script>