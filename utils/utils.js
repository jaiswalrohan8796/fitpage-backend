const getSuccessResponse = (data) => {
    return {
        success: true,
        message: "success",
        data: data,
    };
};

const getErrorResponse = (err_code, err_message) => {
    return {
        success: false,
        message: err_message,
        error_code: err_code,
        data: {},
    };
};

module.exports = {
    getSuccessResponse,
    getErrorResponse,
};
