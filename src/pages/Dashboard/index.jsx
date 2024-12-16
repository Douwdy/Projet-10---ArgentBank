import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Account from '../../components/BankAccount';
import UserInfoForm from '../../components/UserInfoForm';
import LoadingSpinner from '../../components/Spinner';
import { toggleEditing, setEditing, fetchProfile } from '../../actions';
import store from '../../store';
import accounts from '../../accountData.json';

const Dashboard = () => {
  const dispatch = useDispatch();
  const isEditing = useSelector((state) => state.account.isEditing);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user?.body);
  const loading = useSelector((state) => state.loading);

  if (loading || !user || !accounts) {
    return <LoadingSpinner />;
  }
  const accountsData = accounts.accounts;
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