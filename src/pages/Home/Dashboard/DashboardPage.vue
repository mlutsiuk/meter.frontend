<template>
    <v-container
        @contextmenu.prevent="showContextMenu"
        class="pt-0"
        fluid
    >

        <v-skeleton-loader
            :loading="loading"
            type="card-heading, image"
        >
            <v-btn
                v-if="groups.length === 0"
                @contextmenu.prevent.stop="$mitt.emit('context-menu-hide')"
                @click="showGroupCreateDialog()"
                style="min-height: 130px"
                block
                outlined
                text
            >
                <v-icon>mdi-plus</v-icon>
                Додати першу групу
            </v-btn>
            <group-card
                v-else
                v-for="group in groups"
                :key="group.id"
                :group="group"
            />

            <context-menu ref="contextmenu">
                <context-menu-item icon="mdi-home-group-plus" @click="showGroupCreateDialog()">
                    Створити групу
                </context-menu-item>
            </context-menu>
        </v-skeleton-loader>
    </v-container>
</template>

<script>
import GroupCard from './components/GroupCard';
import ContextMenu from '@/components/ContextMenu';
import ContextMenuItem from '@/components/ContextMenuItem';
import { showGroupCreateDialog } from '@/components/Dialogs';
import axios from '@/plugins/axios';
import { PAGE_DASHBOARD_RELOAD } from './events';

export default {
    name: 'DashboardPage',
    components: {
        ContextMenuItem,
        ContextMenu,
        GroupCard
    },
    data: () => ({
        groups: [],

        loading: false
    }),
    methods: {
        showContextMenu(event) {
            if(this.loading) {
                return;
            }
            this.$refs.contextmenu.show(event);
        },

        showGroupCreateDialog() {
            showGroupCreateDialog(() => this.$mitt.emit(PAGE_DASHBOARD_RELOAD));
        },

        async reloadData() {
            await this.loadMyGroups();
        },
        async loadMyGroups() {
            this.groups = (await axios.get('/dashboard/my')).data;
        }
    },
    async created() {
        this.$mitt.on(PAGE_DASHBOARD_RELOAD, this.reloadData);

        this.loading = true;
        await this.reloadData();
        this.loading = false;
    },
    beforeDestroy() {
        this.$mitt.off(PAGE_DASHBOARD_RELOAD, this.reloadData);
    }
};
</script>