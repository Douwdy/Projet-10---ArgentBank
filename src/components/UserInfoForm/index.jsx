const UserInfoForm = ({ user, handleCancelClick }) => {
    return (
        <section className="edit">
            <h2 className="edit-title">Edit user info</h2>
            <form className="edit-form">
                <div className="edit-form_section">
                    <label htmlFor="username">
                        <span>User name:</span>
                    </label>
                    <input type="text" value={user.userName} id="username" onChange={(e) => user.username = e.target.value}/>
                </div>
                <div className="edit-form_section">
                    <label htmlFor="firstname">
                        <span>First Name:</span>
                    </label>
                    <input type="text" value={user.firstName} disabled id="firstname"/>
                </div>
                <div className="edit-form_section">
                    <label htmlFor="lastname">
                        <span>Last Name:</span>
                    </label>
                    <input type="text" value={user.lastName} disabled id="lastname"/>
                </div>
                <div className="edit-form_section">
                    <button type="submit">Save</button>
                    <button type="reset" onClick={handleCancelClick}>Cancel</button>
                </div>
            </form>
        </section>
    );
}

export default UserInfoForm;