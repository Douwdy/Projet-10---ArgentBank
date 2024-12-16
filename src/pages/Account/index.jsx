import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Operation from '../../components/Operation';
import LoadingSpinner from '../../components/Spinner';
import accounts from '../../accountData.json';
import { useParams } from 'react-router-dom';

const AccountPage = () => {
    const { accountNumber } = useParams();
    const [loading, setLoading] = useState(true);
    const [account, setAccount] = useState(null);

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            window.location.href = '/sign-in';
        } else {
            const foundAccount = accounts.accounts.find(acc => acc.accountNumber === accountNumber);
            setAccount(foundAccount);
            setLoading(false);
        }
    }, [accountNumber]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!account) {
        return <div>Account not found</div>;
    }

    const operationsData = account.operations;

    return (
        <>
            <Nav />
            <main className="main bg-dark">
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank {account.accountType} ({account.accountNumber})</h3>
                        <p className="account-amount">${account.amount.toLocaleString()}</p>
                        <p className="account-amount-description">Available Balance</p>
                        <div className="account-content-wrapper cta">
                            <button className="transaction-button" onClick={() => window.location.href = '/dashboard'}>Close transactions</button>
                        </div>
                    </div>
                </section>
                <section className="account-operations">
                    <Operation AccountOperations={operationsData} />
                </section>
            </main>
            <Footer />
        </>
    );
};

export default AccountPage;