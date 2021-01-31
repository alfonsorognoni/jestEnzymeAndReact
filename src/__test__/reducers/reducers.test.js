import reducer from '../../reducers';
import ProductMock from '../../__mock__/ProductMock';

describe('Test Reducer', () => {
  test('should return initialState', () => {
    expect(reducer({},'')).toEqual({});
  });
  
  test('should Add to cart', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [
        ProductMock
      ]
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('should remove from cart', () => {
    const initialState = {
      cart: [ProductMock],
    };
    const payload = ProductMock;
    const action = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    const expected = {
      cart: []
    };
    expect(reducer(initialState, action)).toEqual(expected);
  })
  
  
});
