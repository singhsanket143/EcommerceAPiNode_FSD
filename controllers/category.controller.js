const categoryService = require('../services/category.service');

const getCategory = async (req, res) => {
    // some controller logic here
    const response = await categoryService.getAllCategories();
    return res.json({
        message: 'Successfully fetched the category',
        success: true,
        code: 200,
        data: response
    });
}
module.exports = {
    getCategory
}


// module.exports = {
//     getCategory: getCategory
// }


