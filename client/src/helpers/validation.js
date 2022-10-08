const regexValidEmail =
    /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const regexCheck = (value, regex) => {
    return regex.test(value);
};

const equalCheck = (value, equalValue) => {
    return value === equalValue;
};

const typePatternError = {
    required: {
        check: (string, emptyString = '') => !equalCheck(string, emptyString),
        msg: 'This field need to fill.',
    },
    email: {
        check: (email) => regexCheck(email, regexValidEmail),
        msg: 'This email is not validate',
    },
    password: {
        check: (password) => regexCheck(password, regexPassword),
        msg: 'Minimum eight characters, at least one letter and one number',
    },
    // confirmPassword: {
    //     check: (confirmPassword, password) =>
    //         !equalCheck(confirmPassword, password),
    //     msg: 'Confirm password not match with password',
    // },
};

export const getErrorMessage = (valueInput, patterns) => {
    const errors = [];
    patterns.map(
        (pattern) =>
            !typePatternError[pattern].check(valueInput) &&
            errors.push(typePatternError[pattern].msg)
    );
    return errors;
};

export const getErrorMessageForm = (valuesForm, inputs) => {
    const errors = {
        email: [],
        password: [],
        confirmPassword: [],
    };
    // eslint-disable-next-line array-callback-return
    inputs.map((input) => {
        const { name, patterns } = input;
        // eslint-disable-next-line array-callback-return
        patterns.map((pattern) => {
            if (pattern === 'confirmPassword') {
                if (
                    !typePatternError[pattern].check(
                        valuesForm[name],
                        valuesForm['password']
                    )
                )
                    errors[name].push(typePatternError[pattern].msg);
            } else {
                if (!typePatternError[pattern].check(valuesForm[name]))
                    errors[name].push(typePatternError[pattern].msg);
            }
        });
    });
    return errors;
};
