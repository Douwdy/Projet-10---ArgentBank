import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Balance from "../../components/Balance";


const Accounts = [
    {
        name: "Savings Account",
        balance: "$10,000.00",
        operation: [
            {
                type: "deposit",
                amount: "$500.00",
                date: "10/01/2021"
            },
            {
                type: "withdrawal",
                amount: "$200.00",
                date: "10/15/2021"
            },
            {
                type: "deposit",
                amount: "$1,000.00",
                date: "11/01/2021"
            },
            {
                type: "withdrawal",
                amount: "$500.00",
                date: "11/15/2021"
            },
            {
                type: "deposit",
                amount: "$2,000.00",
                date: "12/01/2021"
            },
            {
                type: "withdrawal",
                amount: "$1,000.00",
                date: "12/15/2021"
            }
        ]
    },
    {
        name: "Checking Account",
        balance: "$2,000.00",
        operation: [
            {
                type: "deposit",
                amount: "$300.00",
                date: "10/01/2021"
            },
            {
                type: "withdrawal",
                amount: "$100.00",
                date: "10/15/2021"
            },
            {
                type: "deposit",
                amount: "$500.00",
                date: "11/01/2021"
            },
            {
                type: "withdrawal",
                amount: "$200.00",
                date: "11/15/2021"
            },
            {
                type: "deposit",
                amount: "$1,000.00",
                date: "12/01/2021"
            },
            {
                type: "withdrawal",
                amount: "$500.00",
                date: "12/15/2021"
            }
        ],
    },
    {
        name: "Investment Account",
        balance: "$50,000.00",
        operation: [
            {
                type: "deposit",
                amount: "$5,000.00",
                date: "10/01/2021"
            },
            {
                type: "withdrawal",
                amount: "$2,000.00",
                date: "10/15/2021"
            },
            {
                type: "deposit",
                amount: "$10,000.00",
                date: "11/01/2021"
            },
            {
                type: "withdrawal",
                amount: "$5,000.00",
                date: "11/15/2021"
            },
            {
                type: "deposit",
                amount: "$20,000.00",
                date: "12/01/2021"
            },
            {
                type: "withdrawal",
                amount: "$10,000.00",
                date: "12/15/2021"
            }
        ]
    }
];

const Dashboard = () => {
    return (
        <>
            <Nav/>
            <Balance Accounts={Accounts}/>
            <Footer/>
        </>
    );
};

export default Dashboard;