<template>
    <div>
        <counter-delete-dialog/>

        <group-delete-dialog/>
    </div>
</template>

<script>
import CounterDeleteDialog from './CounterDeleteDialog';
import GroupDeleteDialog from '@/components/Dialogs/GroupDeleteDialog';

export default {
    name: 'AppDialogs',
    components: {
        GroupDeleteDialog,
        CounterDeleteDialog
    }
};
</script>