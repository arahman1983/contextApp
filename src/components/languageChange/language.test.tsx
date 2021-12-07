import { render, screen } from '@testing-library/react';
import LanguageChange from './index';

test('renders Selected Language', () => {
  render(
      <LanguageChange />
    );
  const language = screen.getByText(/AR/i) ||  screen.getByText(/EN/i);
  expect(language).toBeInTheDocument();
});
