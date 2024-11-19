import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const NotFound = () => {
    return (
    <>
        <Nav />
        <main class="main bg-dark notfound">
            <div class="header">
                <h1>404 Not Found</h1>
            </div>
        </main>
        <Footer />
    </>
    );
};
export default NotFound;