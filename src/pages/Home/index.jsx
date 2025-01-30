// Components
import Nav from "../../components/Nav/index"; // Importing the Nav component
import Banner from "../../components/Banner/index"; // Importing the Banner component
import Footer from "../../components/Footer/index"; // Importing the Footer component
// Icons
import Money from "../../assets/icon-money.webp"; // Importing the money icon
import Chat from "../../assets/icon-chat.webp"; // Importing the chat icon
import Security from "../../assets/icon-security.webp"; // Importing the security icon
import Features from "../../components/Features";

const Home = () => {
    return (
        <>
            <Nav />
            <Banner />
            <section className="features">
                <Features icon={Chat}>
                Need to talk to a representative? You can get in touch through our
                24/7 chat or through a phone call in less than 5 minutes.
                </Features>
                <Features icon={Money}>
                The more you save with us, the higher your interest rate will be! 
                </Features>
                <Features icon={Security}>
                We use top of the line encryption to make sure your data and money is always safe. 
                </Features>
            </section>
            <Footer />
        </>
    );
};

export default Home;