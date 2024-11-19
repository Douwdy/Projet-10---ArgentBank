import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Account from '../../components/BankAccount';

// temporary hard-coded value
const username = 'Tony Jarvis';


const User = () => {
    return (
    <>
        <Nav />
        <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{username}!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
        <h3 className="sr-only">Account</h3>
        <Account />
    </main>
        <Footer />
    </>
    );
};
export default User;