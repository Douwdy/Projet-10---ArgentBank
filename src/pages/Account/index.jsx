import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Operation from '../../components/Operation';
import accounts from '../../accountData.json';
import { useParams } from 'react-router-dom';

const AccountPage = () => {
    const { accountNumber } = useParams();
    const account = accounts.accounts.find(acc => acc.accountNumber === accountNumber);
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
                    <Operation AccountOperations={operationsData}/>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default AccountPage;