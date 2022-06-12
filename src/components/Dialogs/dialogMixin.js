export default {
    data: () => ({
        active: false,
        onConfirm: null,
        onReject: null,
    }),
    methods: {
        activate(event) {
            console.log(event);
            this.onConfirm = event.onConfirm;
            this.onReject = event.onReject;

            this.active = true;
        },
        close() {
            this.active = false;
        },
        confirm() {
            this.close();

            if(this.onConfirm) {
                this.onConfirm();
            }
        },
        reject() {
            this.close();

            if(this.onReject) {
                this.onReject();
            }
        }
    },
    created() {
        this.$mitt.on(this.activationEvent, this.activate);
    },
    beforeDestroy() {
        this.$mitt.off(this.activationEvent, this.activate);
    }
}