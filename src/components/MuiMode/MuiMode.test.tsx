import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MuiMode from './MuiMode';
import { AppProviders } from '../../providers/AppProviders';

describe('<MuiMode />', () => {
  test('it should mount', () => {
    render(<MuiMode />);

    const muiMode = screen.getByTestId('MuiMode');

    expect(muiMode).toBeInTheDocument();
  });
  test('it should display the correct mode', () => {
    render(<MuiMode />,{
      wrapper:AppProviders
    });

    const heading = screen.getByRole('heading')
    expect(heading).toHaveTextContent('dark mode')
  
  });
});