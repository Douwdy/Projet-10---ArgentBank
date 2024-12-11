import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SignIn from './index';

const mockStore = configureStore([]);
let store;

describe('SignIn Page', () => {
    beforeEach(() => {
        store = mockStore({
            user: {
                isLoading: false,
            },
        });
    });

    test('renders SignIn component', () => {
        render(
            <Provider store={store}>
                <SignIn />
            </Provider>
        );

        expect(screen.getByText('Sign In')).toBeInTheDocument();
    });

    test('renders email and password input fields', () => {
        render(
            <Provider store={store}>
                <SignIn />
            </Provider>
        );

        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });

    test('renders sign in button', () => {
        render(
            <Provider store={store}>
                <SignIn />
            </Provider>
        );

        expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
    });

    test('sign in button is disabled when loading', () => {
        store = mockStore({
            user: {
                isLoading: true,
            },
        });

        render(
            <Provider store={store}>
                <SignIn />
            </Provider>
        );

        expect(screen.getByRole('button', { name: /signing in/i })).toBeDisabled();
    });

    test('email and password input fields update on change', () => {
        render(
            <Provider store={store}>
                <SignIn />
            </Provider>
        );

        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        expect(emailInput.value).toBe('test@example.com');
        expect(passwordInput.value).toBe('password123');
    });

    test('form submission dispatches login action', () => {
        const mockDispatch = jest.fn();
        store.dispatch = mockDispatch;

        render(
            <Provider store={store}>
                <SignIn />
            </Provider>
        );

        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const form = screen.getByRole('form');

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.submit(form);

        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'LOGIN',
            payload: { email: 'test@example.com', password: 'password123' },
        });
    });
});