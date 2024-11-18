import BannerImg from '../../assets/bank-tree.jpeg';

const Banner = () => {
    return (
        <div className="banner" role="banner">
            <img src={BannerImg} alt="Bank tree" />
            <div className="banner-paragraph">
                <h2>No fees.</h2>
                <h2>No minimum deposit.</h2>
                <h2>High interest rates.</h2>
                <p>Open a savings account with Argent Bank today!</p>
            </div>
        </div>
    );
};

export default Banner;