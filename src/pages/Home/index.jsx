// Components
import Nav from "../../components/Nav/index"; // Importing the Nav component
import Banner from "../../components/Banner/index"; // Importing the Banner component
import Footer from "../../components/Footer/index"; // Importing the Footer component
// Icons
import Money from "../../assets/icon-money.png"; // Importing the money icon
import Chat from "../../assets/icon-chat.png"; // Importing the chat icon
import Security from "../../assets/icon-security.png"; // Importing the security icon

const Home = () => {
    return (
        <>
            <Nav />
            <Banner />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <div className="feature-item">
                    <img src={Chat} alt="Chat Icon" className="feature-icon" />
                    <h3 className="feature-item-title">You are our #1 priority</h3>
                    <p>
                        Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes.
                    </p>
                </div>
                <div className="feature-item">
                    <img
                        src={Money}
                        alt="Chat Icon"
                        className="feature-icon"
                    />
                <h3 className="feature-item-title">More savings means higher rates</h3>
                    <p>
                        The more you save with us, the higher your interest rate will be!
                    </p>
                </div>
                <div className="feature-item">
                    <img
                        src={Security}
                        alt="Chat Icon"
                        className="feature-icon"
                    />
                <h3 className="feature-item-title">Security you can trust</h3>
                    <p>
                        We use top of the line encryption to make sure your data and money
                        is always safe.
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;