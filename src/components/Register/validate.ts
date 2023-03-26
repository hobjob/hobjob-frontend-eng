export interface validateInfoValues {
    password: string;
    email: string;
}

interface validateInfoErrors {
    password?: string;
    email?: string;
}

const validate = (values: validateInfoValues) => {
    const errors: validateInfoErrors = {};

    const defaultMin = 2;
    const defaultMax = 32;

    if (!values.password) {
        errors.password = "The field cannot be empty";
    } else if (values.password.length > defaultMax) {
        errors.password = `No more than ${defaultMax} characters`;
    } else if (values.password.length < defaultMin) {
        errors.password = `At least ${defaultMin} characters`;
    }

    if (!values.email) {
        errors.email = "The field cannot be empty";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = "Invalid Email";
    } else if (values.email.length > defaultMax) {
        errors.email = `No more than ${defaultMax} characters`;
    } else if (values.email.length < defaultMin) {
        errors.email = `At least ${defaultMin} characters`;
    }

    return errors;
};

export default validate;
