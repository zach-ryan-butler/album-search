import React from 'react';
import { shallow } from 'enzyme';
import Album from './Album';

describe('Album component', () => {
  it('renders Album', () => {
    const wrapper = shallow(<Album 
      obj={{
        name:'my name',
        title: 'my title',
        id: 'some id',
        ['cover-art-archive']: {
          count: 12
        }
      }}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
