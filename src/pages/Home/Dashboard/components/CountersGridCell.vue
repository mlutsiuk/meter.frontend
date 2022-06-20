<template>
    <v-card
        @contextmenu="showContextMenu"
        class="counter-grid-cell d-flex"
        v-ripple
        outlined
    >
        <v-card-text class="text-body-2 px-4 py-3 d-flex align-center">
            <v-icon
                v-text="iconCode"
                :color="color"
                class="pr-3"
                size="24"
            />
            <div class="d-flex flex-column">
                <div
                    class="font-weight-medium text--primary text-truncate pr-1"
                    :class="{
                        'font-italic': title === '',
                        'text--disabled' : title === ''

                    }"
                    v-text="title === '' ? 'Назва' : title"
                />
                <div
                    v-if="lastMeasure"
                    v-text="lastMeasure"
                    class="text-subtitle-2 text--secondary latest-measure-value-text"
                />
            </div>
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
            type: String,
            default: null
        },
        iconId: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        disableContextMenu: {
            type: Boolean,
            default: false
        },
        lastMeasure: {
            type: Number,
            default: null
        }
    },
    methods: {
        showContextMenu(event) {
            if (this.disableContextMenu) {
                event.preventDefault();
                return;
            }
            this.$refs.contextmenu.show(event);
        }
    },
    computed: {
        iconCode() {
            return this.$store.getters['icon/find'](this.iconId)?.code ?? 'mdi-clock-outline';
        }
    },
    created() {
        this.$store.dispatch('icon/fetch');
    }
};
</script>

<style lang="scss" scoped>
.counter-grid-cell {
    border-color: var(--v-secondary-base);
    user-select: none;
}
.latest-measure-value-text {
    line-height: 1.2;
}
</style>