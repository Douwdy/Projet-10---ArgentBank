import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateProfile } from '../../actions';

const UserInfoForm = ({ user, handleCancelClick }) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState(user.userName);

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        dispatch(updateProfile({ ...user, userName: username }, token, handleCancelClick));
    };

    const handleCancel = () => {
        setUsername(user.userName);
        handleCancelClick();
    };

    return (
        <section className="edit">
            <h2 className="edit-title">Edit user info</h2>
            <form className="edit-form" onSubmit={handleSubmit}>
                <div className="edit-form_section">
                    <label htmlFor="username">
                        <span>User name:</span>
                    </label>
                    <input type="text" value={username} id="username" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="edit-form_section">
                    <label htmlFor="firstname">
                        <span>First Name:</span>
                    </label>
                    <input type="text" value={user.firstName} disabled id="firstname" />
                </div>
                <div className="edit-form_section">
                    <label htmlFor="lastname">
                        <span>Last Name:</span>
                    </label>
                    <input type="text" value={user.lastName} disabled id="lastname" />
                </div>
                <div className="edit-form_section">
                    <button type="submit">Save</button>
                    <button type="reset" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </section>
    );
};

export default UserInfoForm;