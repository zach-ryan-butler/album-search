import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

describe('Pagination component', () => {
  it('renders Pagination', () => {
    const wrapper = shallow(<Pagination 
      pageUp={() => {}}
      pageDown={() => {}}
      totalPages={10}
      page={5}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
