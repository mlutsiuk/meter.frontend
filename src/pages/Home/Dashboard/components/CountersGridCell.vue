<template>
    <v-card
        @contextmenu.prevent="$refs.contextmenu.show"
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

        <context-menu ref="contextmenu">
            <context-menu-item :route="{ name: 'groups.create' }">
                Відкрити
            </context-menu-item>
            <context-menu-item icon="mdi-playlist-edit" :route="{ name: 'groups.create' }">
                Редагувати
            </context-menu-item>
            <context-menu-item icon="mdi-chart-bar" :route="{ name: 'groups.create' }">
                Графіки
            </context-menu-item>
            <context-menu-item icon="mdi-format-color-text" :route="{ name: 'groups.create' }">
                Вигляд
            </context-menu-item>

            <v-divider/>

            <context-menu-item icon="mdi-trash-can-outline" :route="{ name: 'groups.create' }">
                Видалити
            </context-menu-item>
        </context-menu>
    </v-card>
</template>

<script>
import ContextMenu from '@/components/ContextMenu';
import ContextMenuItem from '@/components/ContextMenuItem';

export default {
    name: 'CountersGridCell',
    components: {
        ContextMenuItem,
        ContextMenu
    },
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