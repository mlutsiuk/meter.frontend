<template>
    <div>
        <counter-appearance-dialog/>
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
import CounterAppearanceDialog from './Counters/Appearance/CounterAppearanceDialog';
import CounterCreateDialog from './Counters/Create/CounterCreateDialog';
import CounterDeleteDialog from './Counters/Delete/CounterDeleteDialog';
import CounterEditDialog from './Counters/Edit/CounterEditDialog';
import GroupCreateDialog from './Groups/Create/GroupCreateDialog';
import GroupDeleteDialog from './Groups/Delete/GroupDeleteDialog';
import GroupEditDialog from './Groups/Edit/GroupEditDialog';
import GroupShareDialog from './Groups/Share/GroupShareDialog';

export default {
    name: 'AppDialogs',
    components: {
        CounterAppearanceDialog,
        CounterCreateDialog,
        CounterDeleteDialog,
        CounterEditDialog,
        GroupCreateDialog,
        GroupDeleteDialog,
        GroupEditDialog,
        GroupShareDialog
    }
};
</script>