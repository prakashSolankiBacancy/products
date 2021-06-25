export const isValidEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
};

export const isValidPassword = (password) => {
    const passwordRegex= /[A-Za-z0-9_*-]/;
    return passwordRegex.test(password);
};