/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import React from 'react';
import AddProduct from '../AddProduct';

describe('AddProduct', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddProduct/>);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should check the button name of the add product modal', () => {
    const instance = wrapper.find('a.secondary-content');
    const buttonName = instance.at(0).props().children;
    expect(buttonName).toBe('Add Product');
    expect(instance.length).toBe(1);
  });

  it('should check the title of the add product modal', () => {
    const modalTitle = wrapper.find('.modal-content').children().at(0).props().children;
    expect(modalTitle).toBe('Add Product information');
  });

  it('should check the title of the add product modal', () => {
    expect(wrapper.containsAllMatchingElements([
      <a href={'#add'} className={'secondary-content modal-trigger btn add-product'} >
      {'Add Product'}
       </a>,
      <h4>{'Add Product information'}</h4>
    ])).toBe(true);
  });
});