import React from 'react';
import { render, screen } from '@testing-library/react';
import Account from './index';

describe('Account Component', () => {
    test('renders account information correctly', () => {
        render(<Account />);
        
        const accountTitles = screen.getAllByText(/Argent Bank/i);
        expect(accountTitles).toHaveLength(3);

        const checkingAccount = screen.getByText(/Argent Bank Checking/i);
        expect(checkingAccount).toBeInTheDocument();

        const savingsAccount = screen.getByText(/Argent Bank Savings/i);
        expect(savingsAccount).toBeInTheDocument();

        const creditCardAccount = screen.getByText(/Argent Bank Credit Card/i);
        expect(creditCardAccount).toBeInTheDocument();
    });

    test('renders "View transactions" buttons', () => {
        render(<Account />);

        const buttons = screen.getAllByText(/View transactions/i);
        expect(buttons).toHaveLength(3);
    });
});