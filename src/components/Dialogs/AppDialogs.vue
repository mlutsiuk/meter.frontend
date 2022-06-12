<template>
    <div>
        <counter-delete-dialog/>

        <group-create-dialog/>
        <group-delete-dialog/>
        <group-edit-dialog/>
    </div>
</template>

<script>
import CounterDeleteDialog from './CounterDeleteDialog';
import GroupDeleteDialog from './GroupDeleteDialog';
import GroupCreateDialog from './GroupCreateDialog';
import GroupEditDialog from '@/components/Dialogs/GroupEditDialog';

export default {
    name: 'AppDialogs',
    components: {
        GroupEditDialog,
        GroupCreateDialog,
        GroupDeleteDialog,
        CounterDeleteDialog
    }
};
</script>