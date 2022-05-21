const validateCategoryCreationRequest = (req, res, next) => {
    if(!req.body.name) {
        return res.json({
            success: false,
            code: 400,
            message: 'Name of the category is not present'
        });
    }
    next();
}

const validateProductCreationRequest = (req, res, next) => {
    if(!req.body.name || !req.body.cost || !req.body.categoryId) {
        return res.json({
            code: 400,
            success: false,
            message: 'Arguments missing for creating product'
        })
    }
    next();
}

module.exports = {
    validateCategoryCreationRequest,
    validateProductCreationRequest
}