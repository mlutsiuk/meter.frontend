<template>
    <v-card
        @contextmenu="showContextMenu"
        class="counter-grid-cell"
        v-ripple
        outlined
    >
        <v-card-text class="text-body-2 px-4 py-3 d-flex align-center">
            <v-icon
                v-text="icon"
                :color="color"
                class="pr-3"
                size="24"
            />
            <span
                class="font-weight-medium text-truncate pr-1"
                :class="{
                    'font-italic': title === '',
                    'text--disabled' : title === ''

                }"
                v-text="title ? title : 'Назва'"
            />
        </v-card-text>

        <context-menu ref="contextmenu">
            <slot name="contextmenu"/>
        </context-menu>
    </v-card>
</template>

<script>
import ContextMenu from '@/components/ContextMenu';

export default {
    name: 'CountersGridCell',
    components: {
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
        },
        disableContextMenu: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        showContextMenu(event) {
            if(this.disableContextMenu) {
                event.preventDefault();
                return;
            }
            this.$refs.contextmenu.show(event);
        }
    }
};
</script>

<style lang="scss" scoped>
.counter-grid-cell {
    border-color: var(--v-secondary-base);
    user-select: none;
}
</style>