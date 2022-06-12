<template>
    <v-list-item
        @click="click()"
        class="px-6"
    >
        <v-list-item-icon
            v-if="icon"
            class="my-0 mr-3 align-self-center"
        >
            <v-icon v-text="icon"/>
        </v-list-item-icon>
        <v-list-item-title :class="{ 'ml-9': !icon }">
            <slot/>
        </v-list-item-title>
    </v-list-item>
</template>

<script>
export default {
    name: 'ContextMenuItem',
    props: {
        route: {
            type: Object ,
            default: null
        },
        icon: {
            type: String,
            default: null
        }
    },
    methods: {
        click() {
            if(this.route) {
                this.$router.push(this.route);
            }
            this.$emit('click');
        }
    }
};
</script>