import Logo from "../Logo/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/sign-in"; // Redirect to the sign-in page
  };

  return (
    <nav className="main-nav">
      <Logo />
      <div>
        {localStorage.getItem("token") ? <a className="main-nav-item" href="/dashboard">Dashboard</a> : null}
        <a className="main-nav-item" href={localStorage.getItem("token") ? "/" : "/sign-in"} onClick={localStorage.getItem("token") ? handleSignOut : null}>
          <FontAwesomeIcon icon={faUserCircle} />
          {localStorage.getItem("token") ? <span>Sign Out</span> : <span>Sign In</span>}
        </a>
      </div>
    </nav>
  );
};

export default Nav;