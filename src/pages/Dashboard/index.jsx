import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Account from '../../components/BankAccount';
import UserInfoForm from '../../components/UserInfoForm';
import { useState } from 'react';
import accounts from '../../accountData.json';

const user = accounts.name[0];

const accountsData = accounts.accounts;

const username = user.firstName + ' ' + user.lastName;

const Dashboard = () => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
    };

    return (
    <>
      <Nav />
      <main className="main bg-dark">
        <div className="header">
        {!isEditing && (
          <>
          <h1>Welcome back<br />{username}!</h1>
          <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
          </>
        )}
        {isEditing && (
          <>
            <UserInfoForm user={user} handleCancelClick={handleCancelClick} />
          </>
        )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <h3 className="sr-only">Account</h3>
        <Account accountData={accountsData}/>
      </main>
      <Footer />
    </>
    );
};

export default Dashboard;