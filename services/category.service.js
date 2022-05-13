const Category = require('../models/index').Categories;
const getAllCategories = async () => {
    const categories = await Category.findAll();
    return categories;
}

const createCategory = async (data) => {
    const newCategory = await Category.create({
        name: data.name,
        description: data.description,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    return newCategory;
}

const deleteCategory = async (categoryId) => {
    await Category.destroy({
        where: {
            id: categoryId
        }
    });
}

module.exports = {
    getAllCategories,
    createCategory,
    deleteCategory
}