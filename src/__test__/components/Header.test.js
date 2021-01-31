import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mock__/providerMock';
import Header from '../../components/Header';
import { create } from 'react-test-renderer';

describe('<Header />', () => {
  test('render Header ', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );

    expect(header.length).toEqual(1);
  });

  test('should render title', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );

    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
  
});

describe('Header Snapshot', () => {
  test('Check Header Snapshot', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.toJSON()).toMatchSnapshot();
  })
  
})


