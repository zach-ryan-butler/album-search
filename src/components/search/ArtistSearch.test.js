import React from 'react';
import { shallow } from 'enzyme';
import ArtistSearch from './ArtistSearch';

describe('ArtistSearch component', () => {
  it('renders ArtistSearch', () => {
    const wrapper = shallow(<ArtistSearch
      text='some text'
      textHandler={() => {}}
      submitHandler={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
