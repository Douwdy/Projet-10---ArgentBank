import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Account from '../../components/BankAccount';
import UserInfoForm from '../../components/UserInfoForm';
import { toggleEditing, setEditing, loadAccountData } from '../../actions';
import store from '../../store';
import accounts from '../../accountData.json';

const Dashboard = () => {
  const dispatch = useDispatch();
  const isEditing = useSelector((state) => state.isEditing);
  const accountData = useSelector((state) => state.accountData);

  useEffect(() => {
    dispatch(loadAccountData(accounts));
  }, [dispatch]);

  if (!accountData) {
    return <div>Loading...</div>;
  }

  const user = accountData.name;
  const accountsData = accountData.accounts;
  const username = user.firstName + ' ' + user.lastName;

  const handleEditClick = () => {
    dispatch(toggleEditing());
  };

  const handleCancelClick = () => {
    dispatch(setEditing(false));
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
            <UserInfoForm user={user} handleCancelClick={handleCancelClick} />
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <h3 className="sr-only">Account</h3>
        <Account accountData={accountsData} />
      </main>
      <Footer />
    </>
  );
};

const App = () => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
);

export default App;