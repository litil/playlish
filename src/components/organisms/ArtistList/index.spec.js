import { render } from '@testing-library/react';
import React from 'react';
import ArtistList from './index.js';

describe('ArtistList', () => {
  it('renders No artist selected yet if none given', () => {
    const { container } = render(<ArtistList deleteFn={jest.fn()} />);
    const emptyString = 'No artist selected yet';

    expect(
      container.querySelector('[data-test="artist-list-container"]').textContent
    ).toBe(emptyString);
  });
});
