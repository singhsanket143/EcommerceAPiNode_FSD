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

test('create category should create a new category', async () => {
    const data = {name: 'electronics'};
    const response = {id: 1, name: 'electronics'};
    const spy = jest.spyOn(Category, 'create').mockImplementation(() => {
        return response;
    })
    await CategoryService.createCategory(data);
    expect(spy).toHaveBeenCalled();
})