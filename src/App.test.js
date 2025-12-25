import { render, screen } from '@testing-library/react';
import App from './App';

// Helper function to resize the window for responsiveness
const resizeWindow = (width) => {
  global.innerWidth = width;
  global.dispatchEvent(new Event('resize'));
};

test('renders learn react link on desktop', () => {
  resizeWindow(1024); // Simulate desktop viewport
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link on mobile', () => {
  resizeWindow(375); // Simulate mobile viewport
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
