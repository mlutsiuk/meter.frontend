import emitter from '@/plugins/emitter';
import { DIALOG_SHOW_COUNTER_DELETE } from './events';

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
 * @param {number} payload.counterId - Counter id to delete
 * @param {function} [onConfirm] - Callback to run after dialog confirm
 * @param {function} [onReject]
 */
export const showCounterDeleteDialog = (payload, onConfirm, onReject) => {
    showDialog(
        DIALOG_SHOW_COUNTER_DELETE,
        payload,
        onConfirm,
        onReject
    );
}