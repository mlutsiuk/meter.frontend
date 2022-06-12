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
import CounterCreateDialog from './CounterCreateDialog';
import CounterDeleteDialog from './CounterDeleteDialog';
import CounterEditDialog from './CounterEditDialog';
import GroupCreateDialog from './GroupCreateDialog';
import GroupDeleteDialog from './GroupDeleteDialog';
import GroupEditDialog from './GroupEditDialog';

export default {
    name: 'AppDialogs',
    components: {
        CounterCreateDialog,
        CounterEditDialog,
        CounterDeleteDialog,
        GroupCreateDialog,
        GroupDeleteDialog,
        GroupEditDialog
    }
};
</script>