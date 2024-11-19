import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Logo from './index';

describe('Logo Component', () => {
    afterEach(cleanup);

    test('renders without crashing', () => {
        render(<Logo />);
        const logoImage = screen.getByAltText('ArgentBankLogo');
        expect(logoImage).toBeInTheDocument();
    });

    test('has correct href attribute', () => {
        render(<Logo />);
        const link = screen.getByRole('link', { name: /argent bank/i });
        expect(link).toHaveAttribute('href', '/');
    });

    test('renders the logo image with correct src', () => {
        render(<Logo />);
        const logoImage = screen.getByAltText('ArgentBankLogo');
        expect(logoImage).toHaveAttribute('src', expect.stringContaining('argentBankLogo.png'));
    });

    test('renders the hidden h1 element', () => {
        render(<Logo />);
        const hiddenHeading = screen.getByText('Argent Bank');
        expect(hiddenHeading).toBeInTheDocument();
        expect(hiddenHeading).toHaveClass('sr-only');
    });
});