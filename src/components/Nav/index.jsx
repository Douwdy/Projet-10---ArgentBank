import Logo from "../Logo/index";

const Nav = () => {
  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/sign-in"; // Redirect to the sign-in page
  };

  return (
  <nav className="main-nav">
    <Logo />
    <div>
    <a className="main-nav-item" href={localStorage.getItem("token") ? "/" : "/sign-in"} onClick={localStorage.getItem("token") ? handleSignOut : null}>
      <i className="fa fa-user-circle"></i>
      {localStorage.getItem("token") ? <span>Sign Out</span> : <span>Sign In</span>}
    </a>
    </div>
  </nav>
  );
};

export default Nav;