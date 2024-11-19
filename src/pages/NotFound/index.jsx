import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const NotFound = () => {
    return (
    <>
        <Nav />
        <main className="main bg-dark notfound">
            <div className="header">
                <h1>404 Not Found</h1>
            </div>
            <p>Sorry, the page you are looking for does not exist.</p>
            <a href="/" className="btn">Go back to Home</a>
        </main>
        <Footer />
    </>
    );
};
export default NotFound;