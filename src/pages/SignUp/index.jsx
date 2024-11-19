import Footer from "../../components/Footer";
import Nav from "../../components/Nav/index"; // Importing the Nav component

const SignUp = () => {
    return (
        <>
            <Nav />
                <main className="sign-in">
                    <section className="sign-in-content">
                        <i className="fa fa-user-circle sign-in-icon"></i>
                        <h1>Sign Up</h1>
                        <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="username">Email</label>
                            <input type="email" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button className="sign-in-button">Sign Up</button>
                        </form>
                    </section>
                </main>
            <Footer />
        </>
    );
};
export default SignUp;