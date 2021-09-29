import React from 'react';
import { render, screen } from '@testing-library/react';

import { CustomHookTesting } from './CustomHookTesting';
import useAuth from './useHook';
jest.mock('./useHook');

describe('src/components/customHookTesting', () => {
  it('renders the custom hook component', () => {
    render(<CustomHookTesting />);

    expect(screen.getByTestId('custom-hook')).toBeInTheDocument();
  });
  it('renders component with useAuth response true', () => {
    (useAuth as jest.Mock).mockReturnValue(true);
    render(<CustomHookTesting />);

    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
  });
});
