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
		errors.name = `No more ${defaultMax} symbols`;
	} else if (values.name.length < defaultMin) {
		errors.name = `Not less than ${defaultMin} symbols`;
	}

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

	if (!values.password) {
		errors.password = "The field cannot be empty";
	} else if (values.password.length > defaultMax) {
		errors.password = `No more ${defaultMax} symbols`;
	} else if (values.password.length < defaultMin) {
		errors.password = `Not less than ${defaultMin} symbols`;
	}

	return errors;
};

export default validate;
