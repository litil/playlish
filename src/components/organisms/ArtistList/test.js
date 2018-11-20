import React from 'react';
import { shallow } from 'enzyme';
import ArtistList from './index.js';
import ArtistRow from '../../molecules/ArtistRow';

it('renders No artist selected yet if none given', () => {
  const cmpt = shallow(<ArtistList />);
  const emptyString = 'No artist selected yet';

  expect(
    cmpt
      .find('div')
      .at(0)
      .text()
  ).toEqual(emptyString);
});

it('renders as many ArtistRow as given artists', () => {
  const artists = [{ id: 1 }, { id: 2 }];
  const cmpt = shallow(<ArtistList artists={artists} />);

  expect(cmpt.find(ArtistRow).length).toEqual(artists.length);
});
