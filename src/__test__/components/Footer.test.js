import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('Footer component', () => {
  const footer = mount(<Footer />);

  test('should render Footer ', () => {
    expect(footer.length).toEqual(1);
  });

  test('should render title', () => {
    expect(footer.find(".Footer-title").text()).toEqual("Platzi Store");
  })
});

describe('Footer Snapshot', () => {
  test('check Footer ui', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
