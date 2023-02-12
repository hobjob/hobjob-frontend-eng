interface validatePasswordValues {
    password: string;
    password_repeat: string;
}

interface validatePasswordErrors {
    password?: string;
    password_repeat?: string;
}

export const validatePassword = (values: validatePasswordValues) => {
    const errors: validatePasswordErrors = {};

    const defaultMin = 2;
    const defaultMax = 32;

    if (!values.password) {
        errors.password = "The field cannot be empty";
    } else if (values.password.length > defaultMax) {
        errors.password = `No more than ${defaultMax} characters`;
    } else if (values.password.length < defaultMin) {
        errors.password = `At least ${defaultMin} characters`;
    }

    if (!values.password_repeat) {
        errors.password_repeat = "The field cannot be empty";
    } else if (values.password_repeat.length > defaultMax) {
        errors.password_repeat = `No more than ${defaultMax} characters`;
    } else if (values.password_repeat.length < defaultMin) {
        errors.password_repeat = `At least ${defaultMin} characters`;
    } else if (values.password !== values.password_repeat) {
        errors.password_repeat = `Пароли не равны`;
    }

    return errors;
};
