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
                <v-card class="mb-4" flat outlined>
                    <v-card-text class="d-flex flex-column">
                        <icon-autocomplete
                            v-model="iconId"
                            :color="color"
                        />

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
import IconAutocomplete from '@/components/Dialogs/Counters/Appearance/IconAutocomplete';

export default {
    name: 'CounterAppearanceDialog',
    mixins: [ dialogMixin ],
    components: {
        IconAutocomplete,
        CountersGridCell,
        DialogActions
    },
    data: () => ({
        activationEvent: DIALOG_SHOW_COUNTER_APPEARANCE,

        title: 'Газ',
        iconId: 1,

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
            return this.$store.getters['icon/find'](this.iconId)?.code ?? 'mdi-clock-outline';
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