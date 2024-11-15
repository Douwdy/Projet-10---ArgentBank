import LogoPng from "../../assets/argentBankLogo.png";

const Logo = () => {
    return (
        <a className="main-nav-logo" href="/index">
            <img className="main-nav-logo-image" src={LogoPng} alt="ArgentBankLogo" />
            <h1 className="sr-only">Argent Bank</h1>
        </a>
    );
};

export default Logo;