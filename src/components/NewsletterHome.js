import React from 'react';

const NewsletterHome = ({ title, articles, contactInfo }) => {
    return (
        <div className="newsletterTitle">
            <h1>{title}</h1>
            <div className="newsletterArticles">
                {articles.map((article, index) => (
                    <div key={index}>
                        <h2>{article.title}</h2>
                        <p>{article.preview}</p>
                        {/* Add more content here, such as images, links, etc... */}
                    </div>
                ))}
            </div>
            <div className="newsletterContactInfo">
                <p>Email: {contactInfo.email}</p>
                {/* Add more contact information as needed */}
            </div>
        </div>
    );
};

export default NewsletterHome;