export interface validatePasswordValues {
    currentPassword: string;
    newPassword: string;
    newPasswordRepeat: string;
}

interface validatePasswordErrors {
    currentPassword?: string;
    newPassword?: string;
    newPasswordRepeat?: string;
}

export const validatePassword = (values: validatePasswordValues) => {
    const errors: validatePasswordErrors = {};

    const defaultMin = 2;
    const defaultMax = 255;

    if (!values.currentPassword) {
        errors.currentPassword = "The field cannot be empty";
    } else if (/[А-Яа-яЁё]/i.test(values.currentPassword)) {
        errors.currentPassword = "Поле не может содержать кириллицу";
    } else if (values.currentPassword.length > defaultMax) {
        errors.currentPassword = `No more ${defaultMax} symbols`;
    } else if (values.currentPassword.length < defaultMin) {
        errors.currentPassword = `Not less than ${defaultMin} symbols`;
    }

    if (!values.newPassword) {
        errors.newPassword = "The field cannot be empty";
    } else if (/[А-Яа-яЁё]/i.test(values.newPassword)) {
        errors.newPassword = "Поле не может содержать кириллицу";
    } else if (values.newPassword.length > defaultMax) {
        errors.newPassword = `No more ${defaultMax} symbols`;
    } else if (values.newPassword.length < defaultMin) {
        errors.newPassword = `Not less than ${defaultMin} symbols`;
    }

    if (!values.newPasswordRepeat) {
        errors.newPasswordRepeat = "The field cannot be empty";
    } else if (/[А-Яа-яЁё]/i.test(values.newPasswordRepeat)) {
        errors.newPasswordRepeat = "Поле не может содержать кириллицу";
    } else if (values.newPasswordRepeat.length > defaultMax) {
        errors.newPasswordRepeat = `No more ${defaultMax} symbols`;
    } else if (values.newPasswordRepeat.length < defaultMin) {
        errors.newPasswordRepeat = `Not less than ${defaultMin} symbols`;
    } else if (values.newPassword !== values.newPasswordRepeat) {
        errors.newPasswordRepeat = `Пароли не равны`;
    }

    return errors;
};
