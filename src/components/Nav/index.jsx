import Logo from "../Logo/index";

const Nav = () => {
    return (
    <nav className="main-nav">
        <Logo />
      <div>
        <a className="main-nav-item" href="/sign-in">
          <i className="fa fa-user-circle"></i>
          {localStorage.getItem("token") ? <span>Sign Out</span> : <span>Sign In</span>}
        </a>
      </div>
    </nav>
    );
};

export default Nav;