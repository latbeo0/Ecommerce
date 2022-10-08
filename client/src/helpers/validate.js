export const isEmpty = (value) => {
    if (!value) return true;
    return false;
};

export const isEmail = (email) => {
    const re =
        // eslint-disable-next-line
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export const isLength = (password) => {
    if (password.length < 6) return true;
    return false;
};

export const isMatch = (password, cf_password) => {
    if (password === cf_password) return true;
    return false;
};

export const checkLogin = (values) => {
    const { email, password } = values;

    if (isEmpty(email) || isEmpty(password))
        return { msg: 'Please fill in all fields.' };
    if (!isEmail(email)) return { msg: 'Invalid emails.' };
    if (isLength(password))
        return { msg: 'Password must be at least 6 characters.' };
};

export const checkRegister = (values) => {
    const { username, email, password, cf_password } = values;

    if (
        isEmpty(username) ||
        isEmpty(email) ||
        isEmpty(password) ||
        isEmpty(cf_password)
    )
        return { msg: 'Please fill in all fields.' };
    if (!isEmail(email)) return { msg: 'Invalid emails.' };
    if (isLength(password))
        return { msg: 'Password must be at least 6 characters.' };
    if (!isMatch(password, cf_password))
        return { msg: 'Password did not match.' };
};

export const checkForgotPassword = (values) => {
    const { email } = values;

    if (isEmpty(email)) return { msg: 'Please fill in all fields.' };
    if (!isEmail(email)) return { msg: 'Invalid emails.' };
};

export const checkResetPassword = (values) => {
    const { password, cf_password } = values;

    if (isEmpty(password) || isEmpty(cf_password))
        return { msg: 'Please fill in all fields.' };
    if (isLength(password))
        return { msg: 'Password must be at least 6 characters.' };
    if (!isMatch(password, cf_password))
        return { msg: 'Password did not match.' };
};

export const checkFile = (file) => {
    if (!file) return { msg: 'No files were uploaded.' };

    if (file.size > 1024 * 1024) return { msg: 'Size too large.' };

    if (file.type !== 'image/jpeg' && file.type !== 'image/png')
        return { msg: 'File format is incorrect.' };
};
