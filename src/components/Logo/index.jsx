import LogoPng from "../../assets/argentBankLogo.webp";

const Logo = () => {
    return (
        <a className="main-nav-logo" href="/">
            <img className="main-nav-logo-image" src={LogoPng} alt="ArgentBankLogo" />
            <h1 className="sr-only">Argent Bank</h1>
        </a>
    );
};

export default Logo;