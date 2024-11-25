import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Balance from "../../components/Balance";
import UserInfoForm from "../../components/UserInfoForm";
import Operation from "../../components/Operation";

const Accounts = [
    {
        name: "Savings Account",
        balance: "$10,000.00",
        operation: [
            {
                id: 1,
                date: "2021-10-01",
                description: "Deposit",
                amount: 500,
                balance: 10500,
                type: "Income",
                category: "Savings",
                note: "",
            },
            {
                id: 2,
                date: "2021-10-15",
                description: "Withdrawal",
                amount: -200,
                balance: 10300,
                type: "Expense",
                category: "Savings",
                note: "",
            },
            {
                id: 3,
                date: "2021-11-01",
                description: "Deposit",
                amount: 1000,
                balance: 11300,
                type: "Income",
                category: "Savings",
                note: "",
            },
            {
                id: 4,
                date: "2021-11-15",
                description: "Withdrawal",
                amount: -500,
                balance: 10800,
                type: "Expense",
                category: "Savings",
                note: "",
            },
            {
                id: 5,
                date: "2021-12-01",
                description: "Deposit",
                amount: 2000,
                balance: 12800,
                type: "Income",
                category: "Savings",
                note: "",
            },
            {
                id: 6,
                date: "2021-12-15",
                description: "Withdrawal",
                amount: -1000,
                balance: 11800,
                type: "Expense",
                category: "Savings",
                note: "",
            }
        ]
    },
    {
        name: "Checking Account",
        balance: "$2,000.00",
        operation: [
            {
                id: 1,
                date: "2021-10-01",
                description: "Deposit",
                amount: 300,
                balance: 2300,
                type: "Income",
                category: "Checking",
                note: "",
            },
            {
                id: 2,
                date: "2021-10-15",
                description: "Withdrawal",
                amount: -100,
                balance: 2200,
                type: "Expense",
                category: "Checking",
                note: "",
            },
            {
                id: 3,
                date: "2021-11-01",
                description: "Deposit",
                amount: 500,
                balance: 2700,
                type: "Income",
                category: "Checking",
                note: "",
            },
            {
                id: 4,
                date: "2021-11-15",
                description: "Withdrawal",
                amount: -200,
                balance: 2500,
                type: "Expense",
                category: "Checking",
                note: "",
            },
            {
                id: 5,
                date: "2021-12-01",
                description: "Deposit",
                amount: 1000,
                balance: 3500,
                type: "Income",
                category: "Checking",
                note: "",
            },
            {
                id: 6,
                date: "2021-12-15",
                description: "Withdrawal",
                amount: -500,
                balance: 3000,
                type: "Expense",
                category: "Checking",
                note: "",
            }
        ],
    },
    {
        name: "Investment Account",
        balance: "$50,000.00",
        operation: [
            {
                id: 1,
                date: "2021-10-01",
                description: "Deposit",
                amount: 5000,
                balance: 55000,
                type: "Income",
                category: "Investment",
                note: "",
            },
            {
                id: 2,
                date: "2021-10-15",
                description: "Withdrawal",
                amount: -2000,
                balance: 53000,
                type: "Expense",
                category: "Investment",
                note: "",
            },
            {
                id: 3,
                date: "2021-11-01",
                description: "Deposit",
                amount: 10000,
                balance: 63000,
                type: "Income",
                category: "Investment",
                note: "",
            },
            {
                id: 4,
                date: "2021-11-15",
                description: "Withdrawal",
                amount: -5000,
                balance: 58000,
                type: "Expense",
                category: "Investment",
                note: "",
            },
            {
                id: 5,
                date: "2021-12-01",
                description: "Deposit",
                amount: 20000,
                balance: 78000,
                type: "Income",
                category: "Investment",
                note: "",
            },
            {
                id: 6,
                date: "2021-12-15",
                description: "Withdrawal",
                amount: -10000,
                balance: 68000,
                type: "Expense",
                category: "Investment",
                note: "",
            }
        ]
    }
];

const Dashboard = () => {
    return (
        <>
            <Nav/>
            <UserInfoForm user={{}}/>
            <section className="balances">
                <Balance Accounts={Accounts}/>
            </section>
            <Operation AccountOperations={Accounts}/>
            <Footer/>
        </>
    );
};

export default Dashboard;