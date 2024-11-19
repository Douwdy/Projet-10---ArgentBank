const accountData = [
    {
        accountType: 'Checking',
        accountNumber: 'x8349',
        amount: 2082.79,
    },
    {
        accountType: 'Savings',
        accountNumber: 'x6712',
        amount: 10928.42,
    },
    {
        accountType: 'Credit Card',
        accountNumber: 'x8349',
        amount: 184.3,
    },
];

const Account = () => {
    return (
        <>
            {accountData.map((account, index) => (
                <section className="account" key={index}>
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank {account.accountType} ({account.accountNumber})</h3>
                        <p className="account-amount">${account.amount.toLocaleString()}</p>
                        <p className="account-amount-description">Available Balance</p>
                        <div className="account-content-wrapper cta">
                            <button className="transaction-button">View transactions</button>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
};

export default Account;