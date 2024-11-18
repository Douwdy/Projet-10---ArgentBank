import { render, screen } from '@testing-library/react';
import Home from './index';

describe('Home Page', () => {
    test('renders Nav component', () => {
        render(<Home />);
        const navElement = screen.getByRole('navigation');
        expect(navElement).toBeInTheDocument();
    });

    test('renders Banner component', () => {
        render(<Home />);
        const bannerElement = screen.getByRole('banner');
        expect(bannerElement).toBeInTheDocument();
    });

    test('renders Footer component', () => {
        render(<Home />);
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();
    });

    test('renders Footer text', () => {
        render(<Home />);
        const footerText = screen.getByText(/Copyright 2020 Argent Bank/i);
        expect(footerText).toBeInTheDocument();
    });
});