<template>
    <v-container class="pt-0" fluid>
        <v-card outlined>
            <v-card-title>
                <h3 class="text-h3">Іконки</h3>
            </v-card-title>

            <v-card-text>
                <icon-create-form/>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import IconCreateForm from '@/pages/Admin/Icons/components/IconCreateForm';
export default {
    name: 'IconsPage',
    components: { IconCreateForm }
};
</script>