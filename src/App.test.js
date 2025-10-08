import { render, screen } from '@testing-library/react';
import App from './App';

test("renders the hero heading with Vihaan's name", () => {
  render(<App />);
  const heroHeading = screen.getByRole('heading', { name: /Vihaan Bussa/i });
  expect(heroHeading).toBeInTheDocument();
});
