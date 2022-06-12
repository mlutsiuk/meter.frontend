export default {
    data: () => ({
        active: false,
        loading: false,

        payload: {},
        onConfirm: null,
        onReject: null
    }),
    methods: {
        activate(event) {
            this.payload = event.payload;
            this.onConfirm = event.onConfirm;
            this.onReject = event.onReject;

            this.active = true;
        },
        async close() {
            if (this.loading) {
                return;
            }
            this.active = false;
            this.payload = {};

            await this.closing();
        },
        async confirm() {
            if (this.confirmed) {
                await this.confirmed();
            }

            // Run provided callback
            if (this.onConfirm) {
                await this.onConfirm();
                this.onConfirm = null;
            }
        },
        async reject() {
            if (this.rejected) {
                await this.rejected();
            }

            // Run provided callback
            if (this.onReject) {
                await this.onReject();
                this.onReject = null;
            }
        },

        // Method that can be overrided in component
        async closing() { },
        async confirmed() {
            await this.close();
        },
        async rejected() {
            await this.close();
        }
    },
    created() {
        this.$mitt.on(this.activationEvent, this.activate);
    },
    beforeDestroy() {
        this.$mitt.off(this.activationEvent, this.activate);
    }
}