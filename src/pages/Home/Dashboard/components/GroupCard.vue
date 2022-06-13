<template>
    <v-card
        @contextmenu.prevent="$refs.contextmenu.show"
        class="mb-4"
        outlined
    >
        <v-card-title class="group-card-title" v-text="group.title"/>

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
            <context-menu-item icon="mdi-plus" @click="showCounterCreateDialog()">
                Додати лічильник
            </context-menu-item>
            <context-menu-item icon="mdi-playlist-edit" @click="showGroupEditDialog()">
                Редагувати групу
            </context-menu-item>
            <context-menu-item icon="mdi-account-multiple-plus" @click="showGroupShareDialog()">
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
import {
    showCounterCreateDialog,
    showGroupDeleteDialog,
    showGroupEditDialog,
    showGroupShareDialog
} from '@/components/Dialogs';

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
        showCounterCreateDialog() {
            showCounterCreateDialog({
                groupId: this.group.id
            });
        },
        showGroupDeleteDialog() {
            showGroupDeleteDialog({
                groupId: this.group.id
            });
        },
        showGroupEditDialog() {
            showGroupEditDialog({
                groupId: this.group.id
            })
        },
        showGroupShareDialog() {
            showGroupShareDialog({
                groupId: this.group.id
            });
        }
    }
};
</script>

<style scoped>
.group-card-title {
    user-select: none;
}

.counters-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    justify-items: stretch;
}
</style>