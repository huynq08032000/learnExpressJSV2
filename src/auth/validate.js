const validateRequired = (keyField, data) => {
    return !data || data === '' ? `${keyField} is required` : null;
};

const validateBeforeRegister = (payload = {}) => {
    const result = Object.entries(payload)?.map(([key, values]) => {
        return validateRequired(key, values);
    });
    return result?.filter?.((el) => el);
};

module.exports = {
    validateBeforeRegister,
};
