import React from 'react';
import { render } from '@testing-library/react';
import Footer from './index';

describe('Footer component', () => {
    test('renders footer element', () => {
        const { container } = render(<Footer />);
        const footer = container.querySelector('footer');
        expect(footer).toBeInTheDocument();
    });

    test('renders footer with correct class', () => {
        const { container } = render(<Footer />);
        const footer = container.querySelector('footer');
        expect(footer).toHaveClass('footer');
    });

    test('renders footer text', () => {
        const { getByText } = render(<Footer />);
        const footerText = getByText(/Copyright 2020 Argent Bank/i);
        expect(footerText).toBeInTheDocument();
    });

    test('renders footer text with correct class', () => {
        const { container } = render(<Footer />);
        const footerText = container.querySelector('.footer-text');
        expect(footerText).toBeInTheDocument();
    });
});