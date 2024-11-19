import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const AccountName = "Savings Account";
const AccountBalance = "$10,000.00";

const Dashboard = () => {
    return (
        <>
            <Nav/>
            <section className="bankaccount-details">
                <h2>{AccountName}</h2>
                <h3>{AccountBalance}</h3>
                <h4>Available balance</h4>
            </section>
            <Footer/>
        </>
    );
};

export default Dashboard;