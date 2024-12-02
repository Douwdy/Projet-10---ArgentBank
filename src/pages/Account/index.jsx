import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Operation from '../../components/Operation';
import accounts from '../../accountData.json';

const accountData = accounts.accounts[0];
const operationsData = accounts.accounts[0].operations

const AccountPage = () => {
    return (
        <>
            <Nav />
            <main className="main bg-dark">
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank {accountData.accountType} ({accountData.accountNumber})</h3>
                        <p className="account-amount">${accountData.amount.toLocaleString()}</p>
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