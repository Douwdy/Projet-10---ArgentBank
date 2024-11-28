import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Operation from '../../components/Operation';

const accountData = [
    {
        accountType: 'Checking',
        accountNumber: 'x8349',
        amount: 2082.79,
    }
];

const operationsData = [
    {
        id: 1,
        date: '2021-07-17',
        description: 'Netflix',
        amount: '-9.99',
        balance: '2072.80',
        type: 'Online',
        category: 'Entertainment',
        note: 'Monthly subscription',
    },
    {
        id: 2,
        date: '2021-07-16',
        description: 'Argent Bank Deposit',
        amount: '3000.00',
        balance: '5072.80',
        type: 'Deposit',
        category: 'Income',
        note: '',
    },
    {
        id: 3,
        date: '2021-07-16',
        description: 'Backbase',
        amount: '-2.99',
        balance: '5069.81',
        type: 'Online',
        category: 'Entertainment',
        note: 'Monthly subscription',
    },
    {
        id: 4,
        date: '2021-07-15',
        description: 'Uber Eats',
        amount: '-25.00',
        balance: '5044.81',
        type: 'Online',
        category: 'Food',
        note: '',
    },
    {
        id: 5,
        date: '2021-07-15',
        description: 'ATM Deposit',
        amount: '100.00',
        balance: '5144.81',
        type: 'Deposit',
        category: 'Income',
        note: '',   
    },
    {
        id: 6,
        date: '2021-07-14',
        description: 'H&M',
        amount: '-40.00',
        balance: '5104.81',
        type: 'Online',
        category: 'Clothing',
        note: '',
    },
    {
        id: 7,
        date: '2021-07-14',
        description: 'Deposit',
        amount: '2000.00',
        balance: '7104.81',
        type: 'Deposit',
        category: 'Income',
        note: '',
    },
];

const AccountPage = () => {
    return (
        <>
            <Nav />
            <main className="main bg-dark">
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank {accountData[0].accountType} ({accountData[0].accountNumber})</h3>
                        <p className="account-amount">${accountData[0].amount.toLocaleString()}</p>
                        <p className="account-amount-description">Available Balance</p>
                        <div className="account-content-wrapper cta">
                            <button className="transaction-button">Close transactions</button>
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