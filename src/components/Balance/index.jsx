const Balance = (Accounts) => {
    const data = Accounts.Accounts;

    return data.map((account, index) => (
        <section key={index} className="bankaccount-details">
            <h2>{account.name}</h2>
            <h3>{account.balance}</h3>
            <h4>Available balance</h4>
            <i class="fa-solid fa-xmark"></i>
        </section>
    ));
    };

export default Balance;