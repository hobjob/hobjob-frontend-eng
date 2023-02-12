export interface validateInfoValues {
    name: string;
    surname: string;
    dateOfBirth: string;
    phone: string;
    city: string;
}

interface validateInfoErrors {
    name?: string;
    surname?: string;
    dateOfBirth?: string;
    phone?: string;
    city?: string;
}

export const validateInfo = (values: validateInfoValues) => {
    const errors: validateInfoErrors = {};

    const defaultMin = 2;
    const defaultMax = 255;

    if (!values.name) {
        errors.name = "The field cannot be empty";
    } else if (values.name.length > defaultMax) {
        errors.name = `No more than ${defaultMax} characters`;
    } else if (values.name.length < defaultMin) {
        errors.name = `At least ${defaultMin} characters`;
    }

    if (!values.surname) {
        errors.surname = "The field cannot be empty";
    } else if (values.surname.length > defaultMax) {
        errors.surname = `No more than ${defaultMax} characters`;
    } else if (values.surname.length < defaultMin) {
        errors.surname = `At least ${defaultMin} characters`;
    }

    if (!values.dateOfBirth) {
        errors.dateOfBirth = "The field cannot be empty";
    } else if (values.dateOfBirth.indexOf("_") !== -1) {
        errors.dateOfBirth = "The field cannot be empty";
    }

    if (!values.phone) {
        errors.phone = "The field cannot be empty";
    } else if (values.phone.length !== 16) {
        errors.phone = "The field cannot be empty";
    }

    if (!values.city) {
        errors.city = "The field cannot be empty";
    } else if (values.city.length > defaultMax) {
        errors.city = `No more than ${defaultMax} characters`;
    } else if (values.city.length < defaultMin) {
        errors.city = `At least ${defaultMin} characters`;
    }

    return errors;
};
