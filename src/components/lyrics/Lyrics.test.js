import React from 'react';
import { shallow } from 'enzyme';
import Lyrics from './Lyrics';

describe('Lyrics component', () => {
  it('renders Lyrics', () => {
    const wrapper = shallow(<Lyrics
      lyrics='some lyrics'/>);
    expect(wrapper).toMatchSnapshot();
  });
});
