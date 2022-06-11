<template>
    <v-snackbar
        v-model="snackbar.active"
        :color="snackbar.color"
        :timeout="-1"
        class="pb-0"
        outlined
    >
        {{ snackbar.text }}

        <template #action="{ attrs }">
            <v-btn
                v-bind="attrs"
                @click="closeSnackbar()"
                :color="snackbar.color"
                icon
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
export default {
    name: 'AppSnackbar',
    data: () => ({
        snackbar: {
            active: false,
            color: 'error',
            text: 'Hello!'
        }
    }),
    methods: {
        showSnackbar({ text, color }) {
            this.snackbar.active = true;
            this.snackbar.text = text;
            this.snackbar.color = color;
        },
        closeSnackbar() {
            this.snackbar.active = false;

            if (this.messagesCount > 0) {
                setTimeout(() => this.showNextMessage(), 150);
            }
        },

        showNextMessage() {
            this.showSnackbar(this.nextMessage);

            this.$store.commit('message/shift');
        }
    },
    computed: {
        messagesCount() {
            return this.$store.getters['message/count'];
        },
        nextMessage() {
            return this.$store.getters['message/next'];
        }
    },
    watch: {
        messagesCount(newCount, oldCount) {
            if (newCount > oldCount && !this.snackbar.active) {    // If newCount > oldCount - new message is added
                this.showNextMessage();
            }
        }
    }
};
</script>

<style scoped>

</style>