import emitter from '@/plugins/emitter';
import {
    DIALOG_SHOW_COUNTER_APPEARANCE,
    DIALOG_SHOW_COUNTER_CREATE,
    DIALOG_SHOW_COUNTER_DELETE,
    DIALOG_SHOW_COUNTER_EDIT,
    DIALOG_SHOW_GROUP_CREATE,
    DIALOG_SHOW_GROUP_DELETE,
    DIALOG_SHOW_GROUP_EDIT,
    DIALOG_SHOW_GROUP_SHARE
} from './events';

/**
 * @param {string} event - Dialog show event name
 * @param {Object} payload - Payload to send to dialog component
 * @param {function} [onConfirm] - Callback to run after dialog confirm
 * @param {function} [onReject]
 */
const showDialog = (event, payload, onConfirm, onReject) => {
    emitter.emit(event, {
        payload,
        onConfirm,
        onReject
    });
}

/**
 * @param {Object} payload - Payload to send to dialog component
 * @param {number} payload.counterId - Counter id
 * @param {function} [onConfirm] - Callback to run after dialog confirm
 * @param {function} [onReject] - Callback to run after dialog reject
 */
export const showCounterAppearanceDialog = (payload, onConfirm, onReject) => {
    showDialog(
        DIALOG_SHOW_COUNTER_APPEARANCE,
        payload,
        onConfirm,
        onReject
    );
}

/**
 * @param {Object} payload - Payload to send to dialog component
 * @param {number} payload.groupId - Counter group id
 * @param {function} [onConfirm] - Callback to run after dialog confirm
 * @param {function} [onReject] - Callback to run after dialog reject
 */
export const showCounterCreateDialog = (payload, onConfirm, onReject) => {
    showDialog(
        DIALOG_SHOW_COUNTER_CREATE,
        payload,
        onConfirm,
        onReject
    );
}

/**
 * @param {Object} payload - Payload to send to dialog component
 * @param {number} payload.counterId - Counter id to delete
 * @param {function} [onConfirm] - Callback to run after dialog confirm
 * @param {function} [onReject] - Callback to run after dialog reject
 */
export const showCounterDeleteDialog = (payload, onConfirm, onReject) => {
    showDialog(
        DIALOG_SHOW_COUNTER_DELETE,
        payload,
        onConfirm,
        onReject
    );
}

/**
 * @param {Object} payload - Payload to send to dialog component
 * @param {number} payload.counterId - Counter id to edit
 * @param {function} [onConfirm] - Callback to run after dialog confirm
 * @param {function} [onReject] - Callback to run after dialog reject
 */
export const showCounterEditDialog = (payload, onConfirm, onReject) => {
    showDialog(
        DIALOG_SHOW_COUNTER_EDIT,
        payload,
        onConfirm,
        onReject
    );
}

/**
 * @param {function} [onConfirm] - Callback to run after dialog confirm
 * @param {function} [onReject] - Callback to run after dialog reject
 */
export const showGroupCreateDialog = (onConfirm, onReject) => {
    showDialog(
        DIALOG_SHOW_GROUP_CREATE,
        { },
        onConfirm,
        onReject
    );
}

/**
 * @param {Object} payload - Payload to send to dialog component
 * @param {number} payload.groupId - Group id to delete
 * @param {function} [onConfirm] - Callback to run after dialog confirm
 * @param {function} [onReject] - Callback to run after dialog reject
 */
export const showGroupDeleteDialog = (payload, onConfirm, onReject) => {
    showDialog(
        DIALOG_SHOW_GROUP_DELETE,
        payload,
        onConfirm,
        onReject
    );
}

/**
 * @param {Object} payload - Payload to send to dialog component
 * @param {number} payload.groupId - Group id to edit
 * @param {function} [onConfirm] - Callback to run after dialog confirm
 * @param {function} [onReject] - Callback to run after dialog reject
 */
export const showGroupEditDialog = (payload, onConfirm, onReject) => {
    showDialog(
        DIALOG_SHOW_GROUP_EDIT,
        payload,
        onConfirm,
        onReject
    );
}

/**
 * @param {Object} payload - Payload to send to dialog component
 * @param {number} payload.groupId - Group id to share
 * @param {function} [onConfirm] - Callback to run after dialog confirm
 * @param {function} [onReject] - Callback to run after dialog reject
 */
export const showGroupShareDialog = (payload, onConfirm, onReject) => {
    showDialog(
        DIALOG_SHOW_GROUP_SHARE,
        payload,
        onConfirm,
        onReject
    );
}