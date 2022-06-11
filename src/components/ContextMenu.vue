<template>
    <v-menu
        v-model="active"
        :position-x="x"
        :position-y="y"
        absolute
        offset-y
    >
        <div @contextmenu.prevent="() => {}">
            <slot>
                <v-list dense>
                    <v-list-item/>
                </v-list>
            </slot>
        </div>
    </v-menu>
</template>

<script>
export default {
    name: 'ContextMenu',
    data: () => ({
        active: false,
        x: 0,
        y: 0
    }),
    methods: {
        hide() {
            this.active = false;
        },
        show(e) {
            // Send event to close other context menus, send on method start to prevent self-closing
            this.$mitt.emit('context-menu-hide');

            e.stopPropagation();
            e.preventDefault();

            this.active = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.active = true;
            });
        }
    },
    created() {
        this.$mitt.on('context-menu-hide', this.hide);
    },
    beforeDestroy() {
        this.$mitt.off('context-menu-hide', this.hide);
    }
};
</script>