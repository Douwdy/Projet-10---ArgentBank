import { render, screen, fireEvent } from '@testing-library/react';
import SignIn from './index'; // Import the SignIn component

describe('SignIn Page', () => {
    test('renders SignIn component', () => {
        render(<SignIn />);
        const signInElement = screen.getAllByText(/Sign In/i)[0];
        expect(signInElement).toBeInTheDocument();
    });

    test('renders email input', () => {
        render(<SignIn />);
        const emailInput = screen.getByLabelText(/Username/i);
        expect(emailInput).toBeInTheDocument();
    });

    test('renders password input', () => {
        render(<SignIn />);
        const passwordInput = screen.getByLabelText(/Password/i);
        expect(passwordInput).toBeInTheDocument();
    });

    test('renders submit button', () => {
        render(<SignIn />);
        const submitButton = screen.getByRole('button', { name: /Sign In/i });
        expect(submitButton).toBeInTheDocument();
    });

    test('allows user to type password', () => {
        render(<SignIn />);
        const passwordInput = screen.getByLabelText(/Password/i);
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        expect(passwordInput.value).toBe('password123');
    });
});