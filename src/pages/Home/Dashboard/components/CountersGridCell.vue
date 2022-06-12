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
            <context-menu-item :route="{ name: 'counters.show', params: { counterId: counterId } }">
                Відкрити
            </context-menu-item>
            <context-menu-item icon="mdi-playlist-edit" :route="{ name: 'counters.edit', params: { counterId: counterId }  }">
                Редагувати
            </context-menu-item>
            <context-menu-item icon="mdi-chart-bar" :route="{ name: 'counters.charts', params: { counterId: counterId } }">
                Графіки
            </context-menu-item>

            <!-- TODO: Show dialog menu -->
            <context-menu-item icon="mdi-format-color-text" @click="nonImplemented()">
                Вигляд
            </context-menu-item>

            <v-divider/>

            <!-- TODO: Show dialog menu -->
            <context-menu-item icon="mdi-trash-can-outline" @click="showCounterDeleteDialog()">
                Видалити
            </context-menu-item>
        </context-menu>
    </v-card>
</template>

<script>
import ContextMenu from '@/components/ContextMenu';
import ContextMenuItem from '@/components/ContextMenuItem';
import { showCounterDeleteDialog } from '@/components/Dialogs';

export default {
    name: 'CountersGridCell',
    components: {
        ContextMenuItem,
        ContextMenu
    },
    props: {
        counterId: {
            type: Number,
            required: true
        },
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
    },
    methods: {
        nonImplemented() {
            this.$store.commit('message/push', {
                text: 'Наразі це не реалізовано',
                color: 'accent'
            });
        },
        showCounterDeleteDialog() {
            showCounterDeleteDialog({ counterId: this.counterId }, () => {
                console.log('Reloaded data from component');
                this.$store.commit('message/push', {
                    text: 'Видалено з компонента',
                    color: 'success'
                });
            });
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