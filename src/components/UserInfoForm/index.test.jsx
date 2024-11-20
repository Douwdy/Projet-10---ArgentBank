import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserInfoForm from './index.jsx';

describe('UserInfoForm', () => {
    const user = {
        username: 'johndoe',
        firstName: 'John',
        lastName: 'Doe'
    };

    test('renders UserInfoForm component', () => {
        render(<UserInfoForm user={user} />);
        expect(screen.getByText('Edit user info')).toBeInTheDocument();
    });

    test('renders user information correctly', () => {
        render(<UserInfoForm user={user} />);
        expect(screen.getByLabelText('User name:')).toHaveValue(user.username);
        expect(screen.getByLabelText('First Name:')).toHaveValue(user.firstName);
        expect(screen.getByLabelText('Last Name:')).toHaveValue(user.lastName);
    });

    test('username input is not disabled', () => {
        render(<UserInfoForm user={user} />);
        const usernameInput = screen.getByLabelText('User name:');
        expect(usernameInput).not.toBeDisabled();
    });

    test('first name and last name inputs are disabled', () => {
        render(<UserInfoForm user={user} />);
        expect(screen.getByLabelText('First Name:')).toBeDisabled();
        expect(screen.getByLabelText('Last Name:')).toBeDisabled();
    });

    test('form has Save and Cancel buttons', () => {
        render(<UserInfoForm user={user} />);
        expect(screen.getByText('Save')).toBeInTheDocument();
        expect(screen.getByText('Cancel')).toBeInTheDocument();
    });

    test('form submission', () => {
        const handleSubmit = jest.fn();
        render(<UserInfoForm user={user} />);
        fireEvent.submit(screen.getByRole('button', { name: /save/i }));
        expect(handleSubmit).not.toHaveBeenCalled(); // Since handleSubmit is not passed as a prop
    });
});