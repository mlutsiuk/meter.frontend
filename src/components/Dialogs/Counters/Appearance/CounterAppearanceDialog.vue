<template>
    <v-dialog
        @click:outside="close()"
        @keydown.esc="close()"
        v-model="active"
        max-width="500px"
        no-click-animation
        persistent
    >
        <v-card>
            <v-card-title>
                Зовнішній вигляд лічильника
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="6">
                        <!-- TODO: Create component for icons selection -->
                        <v-autocomplete
                            :items="icons"
                            item-value="id"
                            item-text="code"
                        >
                            <template #selection="{ item }">
                                <v-icon v-text="item.code"/>
                                {{ item.code }}
                            </template>

                            <template #item="{ item }">
                                <v-list-item-icon>
                                    <v-icon v-text="item.code"/>
                                </v-list-item-icon>

                                <v-list-item-content>
                                    <v-list-item-action-text v-text="item.code"/>
                                </v-list-item-content>
                            </template>
                        </v-autocomplete>
                    </v-col>
                    <v-col cols="9">
                        <v-color-picker
                            v-model="color"
                            hide-canvas
                            hide-inputs
                            hide-mode-switch
                            show-swatches
                            swatches-max-height="150"
                        />
                    </v-col>
                </v-row>
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

export default {
    name: 'CounterAppearanceDialog',
    mixins: [ dialogMixin ],
    components: {
        DialogActions
    },
    data: () => ({
        activationEvent: DIALOG_SHOW_COUNTER_APPEARANCE,

        title: '',
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
    }
};
</script>

<style lang="scss">
@import "@/assets/scss/_global.scss";

.v-color-picker__swatches {
    @extend .themed-scrollbar;
}
</style>