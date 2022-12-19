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
        errors.password = `No more ${defaultMax} symbols`;
    } else if (values.password.length < defaultMin) {
        errors.password = `Not less than ${defaultMin} symbols`;
    }

    if (!values.password_repeat) {
        errors.password_repeat = "The field cannot be empty";
    } else if (values.password_repeat.length > defaultMax) {
        errors.password_repeat = `No more ${defaultMax} symbols`;
    } else if (values.password_repeat.length < defaultMin) {
        errors.password_repeat = `Not less than ${defaultMin} symbols`;
    } else if (values.password !== values.password_repeat) {
        errors.password_repeat = `Пароли не равны`;
    }

    return errors;
};
