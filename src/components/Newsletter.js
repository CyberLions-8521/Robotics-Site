import React from 'react';

const NewsletterHome = ({ box, title1, title2 }) => {
    return (
        <><div className="newsletterBox">
            <div>{box}</div>
            <div className="newsletterTitle1">
            <h1>{title1}</h1>
        </div>
        <div className="newsletterTitle2">
            <h1>{title2}</h1>
        </div>
        </div>
        
        </>
    );
};

export default NewsletterHome;