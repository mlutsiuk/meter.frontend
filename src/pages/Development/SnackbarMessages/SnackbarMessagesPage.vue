<template>
    <v-card>
        <v-card-title>
            Snackbar messages test tool
        </v-card-title>
        <v-card-text>
            <div class="mb-4">
                <v-text-field v-model="message" label="Message"/>
                <v-text-field v-model="color" label="Color"/>

                <v-btn
                    @click="addMessage()"
                    color="success"
                    class="mb-2"
                    block
                >
                    Add
                </v-btn>

                <v-btn
                    @click="shiftMessage()"
                    color="secondary"
                    block
                >
                    Shift
                </v-btn>
            </div>

            <v-list v-if="messagesCount">
                <v-list-item v-if="nextMessage">
                    <v-list-item-icon>
                        <v-icon :color="nextMessage.color">
                            mdi-message-arrow-right
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="nextMessage.text"/>
                    </v-list-item-content>
                </v-list-item>

                <v-divider v-if="nextMessage"/>

                <v-list-item
                    v-for="(message, i) in $store.getters['message/messages']"
                    :key="i"
                    :color="message.color"
                >
                    <v-list-item-icon>
                        <v-icon
                            :color="message.color"
                        >
                            mdi-message
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="message.text"/>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-alert
                v-else
                type="warning"
                prominent
                dense
                outlined
            >
                Messages list is empty, add new message vie form above
            </v-alert>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'SnackbarMessagesPage',
    data: () => ({
        message: 'Test message',
        color: 'success'
    }),
    methods: {
        addMessage() {
            this.$store.commit('message/push', {
                text: this.message,
                color: this.color
            })
        },
        shiftMessage() {
            console.log(this.nextMessage);
            this.$store.commit('message/shift')
        }
    },
    computed: {
        messagesCount() {
            return this.$store.getters['message/count'];
        },
        nextMessage() {
            return this.$store.getters['message/next'];
        },
    },
    watch: {
        messagesCount(newCount, oldCount) {
            console.log(`Old count - ${ oldCount }, New count - ${ newCount }`);
        }
    }
};
</script>

<style scoped>

</style>