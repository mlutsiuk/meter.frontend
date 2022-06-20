import { extend, setInteractionMode } from 'vee-validate';
import { email, max, max_value, min, min_value, numeric, required } from 'vee-validate/dist/rules';

setInteractionMode('eager');

extend('required', {
    ...required,
    message: 'Не може бути порожнє',
    computesRequired: true,

    validate(value) {
        return {
            required: true,
            valid: [ '', null, undefined ].indexOf(value) === -1
        };
    }
});

extend('email', {
    ...email,
    message: 'Неправильний формат'
});

extend('max', {
    ...max,
    message: 'Не може містити більше {length} символів'
});

extend('max_value', {
    ...max_value,
    message: 'Не можи бути більше за {max}'
});

extend('min', {
    ...min,
    message: 'Не може містити менше {length} символів'
});

extend('min_value', {
    ...min_value,
    message: 'Не можи бути менше за {min}'
});

extend('numeric', {
    ...numeric,
    message: 'Може містити виключно цифри'
});

extend('confirm_password', {
    validate: (value, { original }) => (
        value === original
    ),
    params: [
        {
            name: 'original'
        }
    ],
    message: 'Паролі відрізняются'
});