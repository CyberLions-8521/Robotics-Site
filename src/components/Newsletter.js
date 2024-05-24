import React from 'react';

const NewsletterHome = ({ title1, title2, articleHeader, articleText }) => {
    return (
        <>
        
        <div className="newsletterBox">
            <div className="newsletterTitle1">
                what's good gang
            <h1>{title1}</h1>
        </div>
        <div className="newsletterTitle2">
            <h1>{title2}</h1>
        </div>
        </div>
        <div className="articleBox">
            <div className="articleHeader">
                <h2>{articleHeader}</h2>
            </div>
            <div className="articleText">
                <p>{articleText}</p>
            </div>
        </div>
        
        </>
    );
};

export default NewsletterHome;