import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Fullstack Developer', () => {
  render(<App />);
  const linkElement = screen.getByText(/Shesdev Development/i);
  expect(linkElement).toBeInTheDocument();
});
