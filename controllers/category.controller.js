const categoryService = require('../services/category.service');

const getAllCategories = async (req, res) => {
    // some controller logic here
    const response = await categoryService.getAllCategories();
    return res.json({
        message: 'Successfully fetched the category',
        success: true,
        code: 200,
        data: response
    });
}

const createCategory = async (req, res) => {
    const response = await categoryService.createCategory(req.body);
    return res.json({
        message: 'Successfully created a new category',
        success: true,
        code: 201,
        data: response
    });
}

const deleteCategory = async (req, res) => {
    console.log(req.params);
    await categoryService.deleteCategory(req.params.id);
    return res.json({
        message: 'Successfully deleted a category',
        success: true,
        code: 200,
    });
}

const getCategory = async (req, res) => {
    const response = await categoryService.getCategory(req.params.id);
    return res.json({
        message: 'Successfully fetched a category',
        success: true,
        code: 200,
        data: response
    });
}

module.exports = {
    getAllCategories,
    createCategory,
    deleteCategory,
    getCategory
}


// module.exports = {
//     getCategory: getCategory
// }


