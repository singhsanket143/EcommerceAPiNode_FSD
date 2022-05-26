const Category = require('../../models/index').Categories;
const CategoryService = require('../../services/category.service');

test('get all categories should return categories', async () => {
    const response = [{name: 'electronics'}, {name: 'Kitchenware'}];
    const spy = jest.spyOn(Category, 'findAll').mockImplementation(() => {
        return response;
    })
    await CategoryService.getAllCategories();
    expect(spy).toHaveBeenCalled();
})