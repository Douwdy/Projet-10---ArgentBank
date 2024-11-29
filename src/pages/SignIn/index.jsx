import Footer from "../../components/Footer";
import Nav from "../../components/Nav/index"; // Importing the Nav component

const SignIn = () => {
    return (
        <>
            <Nav />
                <main className="sign-in">
                    <section className="sign-in-content">
                        <i className="fa fa-user-circle sign-in-icon"></i>
                        <h1>Sign In</h1>
                        <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button className="sign-in-button">Sign In</button>
                        </form>
                        {/* <a href="/sign-up">Create account</a> */}
                    </section>
                </main>
            <Footer />
        </>
    );
};
export default SignIn;