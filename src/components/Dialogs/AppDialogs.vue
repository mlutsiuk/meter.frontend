<template>
    <div>
        <counter-create-dialog/>
        <counter-delete-dialog/>
        <counter-edit-dialog/>

        <group-create-dialog/>
        <group-delete-dialog/>
        <group-edit-dialog/>
        <group-share-dialog/>
    </div>
</template>

<script>
import CounterCreateDialog from './CounterCreateDialog';
import CounterDeleteDialog from './CounterDeleteDialog';
import CounterEditDialog from './CounterEditDialog';
import GroupCreateDialog from './GroupCreateDialog';
import GroupDeleteDialog from './GroupDeleteDialog';
import GroupEditDialog from './GroupEditDialog';
import GroupShareDialog from './Groups/Share/GroupShareDialog';

export default {
    name: 'AppDialogs',
    components: {
        GroupShareDialog,
        CounterCreateDialog,
        CounterEditDialog,
        CounterDeleteDialog,
        GroupCreateDialog,
        GroupDeleteDialog,
        GroupEditDialog
    }
};
</script>