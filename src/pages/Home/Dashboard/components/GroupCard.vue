<template>
    <v-card
        @contextmenu="showContextMenu"
        class="mb-4"
        outlined
    >
        <v-card-title class="group-card-title" v-text="group.title"/>

        <v-card-text v-if="group.counters.length > 0" class="counters-grid">
            <counters-grid-cell
                @dblclick.native="$router.push({ name: 'counters.show', params: { counterId: counter.id } })"
                v-for="counter in group.counters"
                :key="counter.id"
                :counter-id="counter.id"
                :color="counter.color"
                :icon-id="counter.iconId"
                :title="counter.title"
                :last-measure="counter.lastMeasure?.value"
            >
                <template #contextmenu>
                    <context-menu-item :route="{ name: 'counters.show', params: { counterId: counter.id } }">
                        Відкрити
                    </context-menu-item>
                    <context-menu-item icon="mdi-playlist-edit" @click="showCounterEditDialog(counter.id)">
                        Редагувати
                    </context-menu-item>
                    <context-menu-item icon="mdi-chart-bar"
                                       :route="{ name: 'counters.charts', params: { counterId: counter.id } }">
                        Графіки
                    </context-menu-item>

                    <v-divider/>

                    <context-menu-item icon="mdi-trash-can-outline" @click="showCounterDeleteDialog(counter.id)">
                        Видалити
                    </context-menu-item>
                </template>
            </counters-grid-cell>
        </v-card-text>
        <v-card-text
            v-else
        >
            <v-btn
                @contextmenu.prevent.stop="$mitt.emit('context-menu-hide')"
                @click="showCounterCreateDialog()"
                style="min-height: 50px"
                block
                text
            >
                <v-icon>mdi-plus</v-icon>
                Додати перший лічильник
            </v-btn>
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
    showCounterDeleteDialog,
    showCounterEditDialog,
    showGroupDeleteDialog,
    showGroupEditDialog,
    showGroupShareDialog
} from '@/components/Dialogs';
import { PAGE_DASHBOARD_RELOAD } from '@/pages/Home/Dashboard/events';

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
        showContextMenu(event) {
            this.$refs.contextmenu.show(event);
        },

        showCounterCreateDialog() {
            showCounterCreateDialog({
                groupId: this.group.id
            }, () => this.reloadDashboard());
        },
        showGroupDeleteDialog() {
            showGroupDeleteDialog({
                groupId: this.group.id
            }, () => this.reloadDashboard());
        },
        showGroupEditDialog() {
            showGroupEditDialog({
                groupId: this.group.id
            }, () => this.reloadDashboard());
        },
        showGroupShareDialog() {
            showGroupShareDialog({
                groupId: this.group.id
            }, () => this.reloadDashboard());
        },

        showCounterDeleteDialog(counterId) {
            showCounterDeleteDialog({ counterId }, () => this.reloadDashboard());
        },
        showCounterEditDialog(counterId) {
            showCounterEditDialog({ counterId }, () => this.reloadDashboard());
        },

        reloadDashboard() {
            this.$mitt.emit(PAGE_DASHBOARD_RELOAD);
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