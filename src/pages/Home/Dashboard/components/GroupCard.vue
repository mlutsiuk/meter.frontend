<template>
    <v-card
        @contextmenu.prevent="$refs.contextmenu.show"
        class="mb-4"
        outlined
    >
        <v-card-title v-text="group.title"/>

        <v-card-text class="counters-grid">
            <counters-grid-cell
                @dblclick.native="$router.push({ name: 'counters.show', params: { counterId: counter.id } })"
                v-for="counter in group.counters"
                :key="counter.id"
                :counter-id="counter.id"
                :color="counter.color"
                :icon="counter.iconCode"
                :title="counter.title"
            />
        </v-card-text>

        <context-menu ref="contextmenu">
            <context-menu-item icon="mdi-plus" :route="{ name: 'groups.counters.create', params: { groupId: group.id } }">
                Додати лічильник
            </context-menu-item>
            <context-menu-item icon="mdi-playlist-edit" @click="showGroupEditDialog()">
                Редагувати групу
            </context-menu-item>
            <context-menu-item icon="mdi-account-multiple-plus" :route="{ name: 'groups.share', params: { groupId: group.id } }">
                Поділитися
            </context-menu-item>

            <v-divider/>

            <context-menu-item icon="mdi-trash-can-outline" @click="showGroupDeleteDialog()">
                Видалити
            </context-menu-item>
        </context-menu>
    </v-card>
</template>

<script>
import CountersGridCell from './CountersGridCell';
import ContextMenu from '@/components/ContextMenu';
import ContextMenuItem from '@/components/ContextMenuItem';
import { showGroupDeleteDialog, showGroupEditDialog } from '@/components/Dialogs';

export default {
    name: 'GroupCard',
    components: {
        ContextMenuItem,
        ContextMenu,
        CountersGridCell
    },
    props: {
        group: {
            required: true,
            type: Object
        }
    },
    methods: {
        showGroupDeleteDialog() {
            showGroupDeleteDialog({
                groupId: this.group.id
            });
        },
        showGroupEditDialog() {
            showGroupEditDialog({
                groupId: this.group.id
            })
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