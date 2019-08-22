import React from 'react';
import { shallow } from 'enzyme';
import Song from './Song';

describe('Song component', () => {
  it('renders Song', () => {
    const wrapper = shallow(<Song
      obj={{
        title: 'some title',
        name: 'some name',
        album: 'some album',
        id: 'some id'
      }}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
