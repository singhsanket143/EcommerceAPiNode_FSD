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

test('category controller should delete a category', async () => {
    const req = mockRequest();
    const res = mockResponse();
    const spy = jest.spyOn(CategoryService, 'deleteCategory').mockImplementation(() => {
        return true;
    });

    await CategoryController.deleteCategory(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
        message: 'Successfully deleted a category',
        success: true,
        code: 200,
    })
})


test('category controller should create a category', async () => {
    const req = mockRequest();
    const res = mockResponse();
    const response = {id: 1, name: "new category"};
    const spy = jest.spyOn(CategoryService, 'createCategory').mockImplementation(() => {
        return response;
    });

    await CategoryController.createCategory(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
        message: 'Successfully created a new category',
        success: true,
        code: 201,
        data: response
    })
})