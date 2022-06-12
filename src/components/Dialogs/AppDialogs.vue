<template>
    <div>
        <counter-delete-dialog/>

        <group-create-dialog/>
        <group-delete-dialog/>
    </div>
</template>

<script>
import CounterDeleteDialog from './CounterDeleteDialog';
import GroupDeleteDialog from './GroupDeleteDialog';
import GroupCreateDialog from './GroupCreateDialog';

export default {
    name: 'AppDialogs',
    components: {
        GroupCreateDialog,
        GroupDeleteDialog,
        CounterDeleteDialog
    }
};
</script>