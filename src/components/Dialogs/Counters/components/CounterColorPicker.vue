<template>
    <v-color-picker
        v-model="color"
        style="max-width: none"
        swatches-max-height="150"
        hide-sliders
        hide-canvas
        hide-inputs
        hide-mode-switch
        show-swatches
    />
</template>

<script>
export default {
    name: 'CounterColorPicker',
    props: {
        value: {
            type: String,
            required: true
        }
    },
    computed: {
        color: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            }
        }
    }
};
</script>