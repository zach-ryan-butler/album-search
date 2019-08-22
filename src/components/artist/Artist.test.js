import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist';

describe('Artist Component', () => {
  it('renders Artist', () => {
    const wrapper = shallow(<Artist 
      obj={{
        name: 'my name',
        id: 'my id'
      }}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
