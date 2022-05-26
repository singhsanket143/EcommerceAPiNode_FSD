const CategoryService = require('../../services/category.service');
const CategoryController = require('../../controllers/category.controller');
const {mockResponse, mockRequest} = require('../mocker');

test('category controller should return list of categories', async () => {
    const req = mockRequest();
    const res = mockResponse();
    const response = [{name: 'electronics'}, {name: 'Kitchenware'}];
    const spy = jest.spyOn(CategoryService, 'getAllCategories').mockImplementation(() => {
        return response;
    })

    await CategoryController.getAllCategories(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
        message: 'Successfully fetched the category',
        code: 200,
        success: true,
        data: response
    });
});