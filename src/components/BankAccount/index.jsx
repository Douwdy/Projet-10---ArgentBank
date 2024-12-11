const Account = ({accountData}) => {
    return (
        <>
            {accountData.map((account, index) => (
                <section className="account" key={index}>
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank {account.accountType} ({account.accountNumber})</h3>
                        <p className="account-amount">${account.amount.toLocaleString()}</p>
                        <p className="account-amount-description">Available Balance</p>
                        <div className="account-content-wrapper cta">
                        <button className="transaction-button" onClick={() => window.location.href = `/dashboard/account/${account.accountNumber}`}>View transactions</button>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
};

export default Account;