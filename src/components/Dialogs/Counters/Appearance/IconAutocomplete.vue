<template>
    <v-autocomplete
        v-model="iconId"
        :items="$store.getters['icon/icons']"
        :loading="$store.state.icon.loading"
        :disabled="$store.state.icon.loading"
        item-value="id"
        item-text="code"
        auto-select-first
        filled
        dense
    >
        <template #selection="{ item: icon }">
            <v-icon class="mr-4" v-text="icon.code" :color="color"/>
            {{ icon.code }}
        </template>

        <template #item="{ item: icon, on, attrs }">
            <v-list-item v-on="on" v-bind="attrs">
                <v-list-item-icon>
                    <v-icon v-text="icon.code" :color="color"/>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-action-text v-text="icon.code"/>
                </v-list-item-content>
            </v-list-item>
        </template>
    </v-autocomplete>
</template>

<script>
export default {
    name: 'IconAutocomplete',
    props: {
        value: {
            type: Number,
            required: true
        },
        color: {
            type: String,
            required: true
        }
    },
    computed: {
        iconId: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            }
        }
    },
    created() {
        this.$store.dispatch('icon/fetch');
    }
};
</script>