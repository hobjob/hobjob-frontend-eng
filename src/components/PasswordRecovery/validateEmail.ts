interface validateEmailValues {
    email: string;
}

interface validateEmailErrors {
    email?: string;
}

export const validateEmail = (values: validateEmailValues) => {
    const errors: validateEmailErrors = {};

    const defaultMin = 2;
    const defaultMax = 32;

    if (!values.email) {
        errors.email = "The field cannot be empty";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = "Invalid email";
    } else if (values.email.length > defaultMax) {
        errors.email = `No more ${defaultMax} symbols`;
    } else if (values.email.length < defaultMin) {
        errors.email = `Not less than ${defaultMin} symbols`;
    }

    return errors;
};
