import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from './index'; // Assuming Nav component is in the same directory

describe('Nav Component', () => {
    test('renders the Logo component', () => {
        render(<Nav />);
        const logoElement = screen.getByAltText('ArgentBankLogo');
        expect(logoElement).toBeInTheDocument();
    });

    test('renders navigation links', () => {
        render(<Nav />);
        const links = screen.getAllByRole('link');
        expect(links.length).toBeGreaterThan(0);
    });

    test('renders a link to the sign-in page', () => {
        render(<Nav />);
        const signInLink = screen.getByRole('link', { name: /sign in/i });
        expect(signInLink).toBeInTheDocument();
        expect(signInLink).toHaveAttribute('href', '/sign-in');
    });
});