import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUp from './index';

describe('SignUp Page', () => {
    test('renders SignUp component', () => {
        render(<SignUp />);
        const linkElement = screen.getByRole('heading', { name: /Sign Up/i });
        expect(linkElement).toBeInTheDocument();
    });

    test('renders form elements', () => {
        render(<SignUp />);
        const usernameInput = screen.getByLabelText(/Username/i);
        const emailInput = screen.getByLabelText(/Email/i);
        const passwordInput = screen.getByLabelText(/Password/i);
        const submitButton = screen.getByRole('button', { name: /Sign Up/i });

        expect(usernameInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    test('form submission', () => {
        render(<SignUp />);
        const submitButton = screen.getByText(/Submit/i);
        submitButton.click();
    });
});