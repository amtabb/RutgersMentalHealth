import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
