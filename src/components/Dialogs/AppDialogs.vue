<template>
    <div>
        <counter-create-dialog/>
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
import CounterCreateDialog from '@/components/Dialogs/CounterCreateDialog';

export default {
    name: 'AppDialogs',
    components: {
        CounterCreateDialog,
        GroupEditDialog,
        GroupCreateDialog,
        GroupDeleteDialog,
        CounterDeleteDialog
    }
};
</script>