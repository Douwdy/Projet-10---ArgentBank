const Features = ({ children, icon }) => {
    return (
        <div className="feature-item">
        <img src={icon} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">You are our #1 priority</h3>
            <p>
                {children}
            </p>
        </div>
    );

};

export default Features;