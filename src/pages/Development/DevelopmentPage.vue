<template>
    <v-container fluid>
        <page-child/>
    </v-container>
</template>

<script>
import PageChild from '@/pages/components/PageChild';

export default {
    name: 'DevelopmentPage',
    components: {
        PageChild
    }
};
</script>