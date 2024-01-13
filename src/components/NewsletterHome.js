import React from 'react';
const Newsletter = ({ title, articles, contactInfo }) => {
    return (
        <div>
            <h1>{title}</h1>
            {articles.map((article, index) => (
                <div key={index}>
                    <h2>{article.title}</h2>
                    <p>{article.preview}</p>
                    {/* Add more content here, such as images, links, etc... */}
                </div>
            ))}
            <p>Email: {contactInfo.email}</p>
            {/* Add more contact information as needed */}
        </div>
    );
};

export default Newsletter;