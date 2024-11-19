import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Account from '../../components/BankAccount';

// temporary hard-coded value
const username = 'Tony Jarvis';


const User = () => {
    return (
    <>
        <Nav />
        <main class="main bg-dark">
      <div class="header">
        <h1>Welcome back<br />{username}!</h1>
        <button class="edit-button">Edit Name</button>
      </div>
      <h2 class="sr-only">Accounts</h2>
        <h3 class="sr-only">Account</h3>
        <Account />
    </main>
        <Footer />
    </>
    );
};
export default User;