import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SignIn from './index';
import { login } from '../../actions';

jest.mock('../../actions', () => ({
    login: jest.fn(),
}));

const mockStore = configureStore([]);
let store;

beforeEach(() => {
    store = mockStore({
        user: {
            isLoading: false,
            error: null,
        },
    });
});

test('renders SignIn component', () => {
    render(
        <Provider store={store}>
            <SignIn />
        </Provider>
    );

    expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Remember me/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Sign In/i })).toBeInTheDocument();
});

test('handles form submission', () => {
    render(
        <Provider store={store}>
            <SignIn />
        </Provider>
    );

    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /Sign In/i }));

    expect(login).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password' });
});

test('displays loading state', () => {
    store = mockStore({
        user: {
            isLoading: true,
            error: null,
        },
    });

    render(
        <Provider store={store}>
            <SignIn />
        </Provider>
    );

    expect(screen.getByRole('button', { name: /Signing In.../i })).toBeDisabled();
});

test('displays error message', () => {
    store = mockStore({
        user: {
            isLoading: false,
            error: { message: 'Invalid credentials' },
        },
    });

    render(
        <Provider store={store}>
            <SignIn />
        </Provider>
    );

    expect(screen.getByText(/Invalid credentials/i)).toBeInTheDocument();
});