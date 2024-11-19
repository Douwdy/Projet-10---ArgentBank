import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './index';

describe('NotFound Page', () => {
    test('renders NotFound component', () => {
        render(<NotFound />);
        expect(screen.getByText('404 Not Found')).toBeInTheDocument();
    });

    test('renders a link to go back home', () => {
        render(<NotFound />);
        const linkElement = screen.getByText(/Go back to Home/i);
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.getAttribute('href')).toBe('/');
    });
});