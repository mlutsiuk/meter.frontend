<template>
    <div>
        <counter-create-dialog/>
        <counter-delete-dialog/>
        <counter-edit-dialog/>

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
import CounterEditDialog from '@/components/Dialogs/CounterEditDialog';

export default {
    name: 'AppDialogs',
    components: {
        CounterEditDialog,
        CounterCreateDialog,
        GroupEditDialog,
        GroupCreateDialog,
        GroupDeleteDialog,
        CounterDeleteDialog
    }
};
</script>