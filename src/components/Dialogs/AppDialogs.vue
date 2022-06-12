<template>
    <div>
        <counter-delete-dialog/>

        <group-create-dialog/>
        <group-delete-dialog/>
    </div>
</template>

<script>
import CounterDeleteDialog from './CounterDeleteDialog';
import GroupDeleteDialog from '@/components/Dialogs/GroupDeleteDialog';
import GroupCreateDialog from '@/components/Dialogs/GroupCreateDialog';

export default {
    name: 'AppDialogs',
    components: {
        GroupCreateDialog,
        GroupDeleteDialog,
        CounterDeleteDialog
    }
};
</script>