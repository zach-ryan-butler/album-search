import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List component', () => {
  it('renders List', () => {
    const wrapper = shallow(<List
      arr={[]}
      Comp={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
