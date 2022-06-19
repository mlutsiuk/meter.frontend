<template>
    <v-skeleton-loader
        :loading="loading"
        type="table"
    >
        <v-simple-table class="mt-1">
            <thead>
            <tr>
                <th class="text-left">Іконка</th>
                <th class="text-left">Код</th>
                <th style="width: 1%"></th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="icon in icons"
                :key="icon.id"
            >
                <td>
                    <v-icon medium v-text="icon.code"/>
                </td>
                <td>
                    {{ icon.code }}
                </td>
                <td>
                    <v-btn
                        @click="deleteIcon()"
                        icon
                    >
                        <v-icon>
                            mdi-trash-can-outline
                        </v-icon>
                    </v-btn>
                </td>
            </tr>
            </tbody>
        </v-simple-table>
    </v-skeleton-loader>
</template>

<script>
import axios from '@/plugins/axios';

export default {
    name: 'IconsTable',
    data: () => ({
        loading: false,

        icons: []
    }),
    methods: {
        async reload() {
            this.icons = (await axios.get('/icons')).data;
        },
        deleteIcon() {
            this.$store.commit('message/push', {
                text: 'Наразі це не реалізовано',
                color: 'accent'
            });
        }
    },
    async created() {
        this.loading = true;
        await this.reload();
        this.loading = false
    }
};
</script>