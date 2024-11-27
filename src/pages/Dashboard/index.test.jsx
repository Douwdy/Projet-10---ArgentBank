import { render, screen } from '@testing-library/react';
import User from './index';
import '@testing-library/jest-dom/extend-expect';

describe('User Page', () => {
    test('renders Nav component', () => {
        render(<User />);
        const navElement = screen.getByRole('navigation');
        expect(navElement).toBeInTheDocument();
    });

    test('renders Footer component', () => {
        render(<User />);
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();
    });


    test('renders edit button', () => {
        render(<User />);
        const editButton = screen.getByRole('button', { name: /Edit Name/i });
        expect(editButton).toBeInTheDocument();
    });

    test('renders Account component', () => {
        render(<User />);
        const accountElements = screen.getAllByRole('heading', { name: /Account/i });
        expect(accountElements.length).toBeGreaterThan(0);
    });
});