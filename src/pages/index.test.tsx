import React from 'react';
import { render } from '@testing-library/react';
import App from './index';

test('renders casa bechamel header', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/casa bechamel/i);

  expect(headingElement).toBeInTheDocument();
});

test('renders welcome card', () => {
  const { getByText } = render(<App />);
  const childElement = getByText(/Comida hecha con amor/i);

  expect(childElement).toBeInTheDocument();
});
