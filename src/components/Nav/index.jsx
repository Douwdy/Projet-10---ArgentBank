import Logo from "../Logo/index";

const Nav = () => {
    return (
    <nav className="main-nav">
        <Logo />
      <div>
        <a className="main-nav-item" href="/sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
    );
};

export default Nav;