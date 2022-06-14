<template>
    <v-dialog
        @click:outside="close()"
        @keydown.esc="close()"
        v-model="active"
        max-width="380px"
        no-click-animation
        persistent
        scrollable
    >
        <v-card>
            <v-card-title>
                Зовнішній вигляд лічильника
            </v-card-title>
            <v-card-text class="themed-scrollbar">
                <!-- TODO: Create component for icons selection -->
                <v-card class="mb-4" flat outlined>
                    <v-card-text class="d-flex flex-column">
                        <v-autocomplete
                            v-model="selectedIconId"
                            :items="icons"
                            item-value="id"
                            item-text="code"
                            auto-select-first
                            filled
                            dense
                        >
                            <template #selection="{ item }">
                                <v-icon class="mr-4" v-text="item.code" :color="color"/>
                                {{ item.code }}
                            </template>

                            <template #item="{ item, on, attrs }">
                                <v-list-item v-on="on" v-bind="attrs">
                                    <v-list-item-icon>
                                        <v-icon v-text="item.code" :color="color"/>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-action-text v-text="item.code"/>
                                    </v-list-item-content>
                                </v-list-item>
                            </template>
                        </v-autocomplete>

                        <v-color-picker
                            v-model="color"
                            class="align-self-center"
                            swatches-max-height="150"
                            hide-sliders
                            hide-canvas
                            hide-inputs
                            hide-mode-switch
                            show-swatches
                        />
                    </v-card-text>
                </v-card>

                <counters-grid-cell
                    :color="color"
                    :icon="iconCode"
                    :title="title"
                />
            </v-card-text>

            <dialog-actions
                @cancel="reject()"
                @confirm="confirm()"
                :loading="loading"
                confirm-text="Зберегти"
                confirm-color="success"
            />
        </v-card>
    </v-dialog>
</template>

<script>
import { DIALOG_SHOW_COUNTER_APPEARANCE } from '@/components/Dialogs/events';
import dialogMixin from '@/components/Dialogs/dialogMixin';
import DialogActions from '@/components/DialogActions';
import CountersGridCell from '@/pages/Home/Dashboard/components/CountersGridCell';

export default {
    name: 'CounterAppearanceDialog',
    mixins: [ dialogMixin ],
    components: {
        CountersGridCell,
        DialogActions
    },
    data: () => ({
        activationEvent: DIALOG_SHOW_COUNTER_APPEARANCE,

        title: 'Газ',
        icons: [
            {
                id: 1,
                code: 'mdi-fire'
            },
            {
                id: 2,
                code: 'mdi-water'
            },
            {
                id: 3,
                code: 'mdi-lightbulb'
            }
        ],
        selectedIconId: null,

        color: '#4FC3F7'
    }),
    methods: {
        async confirmed() {
            this.loading = true;
            await new Promise(r => setTimeout(r, 2000));
            this.loading = false;

            await this.close();

            this.$store.commit('message/push', {
                text: 'Збережено',
                color: 'success'
            });
        }
    },
    computed: {
        iconCode() {
            return this.icons.find(icon => icon.id === this.selectedIconId)?.code;
        }
    }
};
</script>

<style lang="scss">
@import "@/assets/scss/_global.scss";

.v-color-picker__swatches {
    @extend .themed-scrollbar;
}
</style>