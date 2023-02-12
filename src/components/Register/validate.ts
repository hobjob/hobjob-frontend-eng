interface validateValues {
    name: string;
    email: string;
    password: string;
}

interface validateErrors {
    name?: string;
    email?: string;
    password?: string;
}

const validate = (values: validateValues) => {
    const errors: validateErrors = {};

    const defaultMin = 2;
    const defaultMax = 32;

    if (!values.name) {
        errors.name = "The field cannot be empty";
    } else if (values.name.length > defaultMax) {
        errors.name = `No more than ${defaultMax} characters`;
    } else if (values.name.length < defaultMin) {
        errors.name = `At least ${defaultMin} characters`;
    }

    if (!values.email) {
        errors.email = "The field cannot be empty";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = "Неверный email";
    } else if (values.email.length > defaultMax) {
        errors.email = `No more than ${defaultMax} characters`;
    } else if (values.email.length < defaultMin) {
        errors.email = `At least ${defaultMin} characters`;
    }

    if (!values.password) {
        errors.password = "The field cannot be empty";
    } else if (/[А-Яа-яЁё]/i.test(values.password)) {
        errors.password = "Поле не может содержать кириллицу";
    } else if (values.password.length > defaultMax) {
        errors.password = `No more than ${defaultMax} characters`;
    } else if (values.password.length < defaultMin) {
        errors.password = `At least ${defaultMin} characters`;
    }

    return errors;
};

export default validate;
