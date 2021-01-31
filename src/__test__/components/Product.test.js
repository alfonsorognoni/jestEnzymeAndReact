import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mock__/providerMock';
import Product from '../../components/Product';
import ProductMock from '../../__mock__/ProductMock';

describe('Test <Product />', () => {
  test('should render <Product />', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    );
    expect(product.length).toEqual(1);
  });

  test('should add to cart', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product product={ProductMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>
    );

    wrapper.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  })
  
  
});

