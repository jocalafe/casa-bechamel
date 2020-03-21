import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders casa bechamel', () => {
  const { getByText } = render(<Header />);
  const headingElement = getByText(/casa bechamel/i);

  expect(headingElement).toBeInTheDocument();
});
