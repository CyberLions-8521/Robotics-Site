import React from 'react'

import { legalDefinitions } from '../data/Dictionary.js'
import TidyList from '../helper-components/TidyList'

export default function Legal() {

    return (
        <div className="legal-container">
            <div className="legal">
                
                <section className="legal-hero">
                    <article className="legal-hero-title">
                        <p className="header-main">Privacy Policy</p>
                        <p className="header-metadata">Last updated: April 03, 2024</p>
                    </article>
                    
                    <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                    <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <a href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/" target="_blank" rel="noreferrer">Free Privacy Policy Generator</a>. </p>
                </section>

                <section className="legal-definitions">

                    <p className="header-main">Interpretation and Definitions</p>
                    
                    <article className="legal-definitions-interpretation">
                        <p className="header-small">Interpretation</p>
                        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                    </article>

                    <article className="legal-definitions-definitions">
                        <p className="header-small">Definitions</p>
                        <p>For the purposes of this Privacy Policy:</p>

                        <ul className="definitions-ul">
                            <TidyList listName={"Legal Definitions"} listItems={legalDefinitions} boldFirstWord={true} />
                        </ul>
                    </article>
                </section>

                <section className="legal-usage-data">
                    
                    <section className="legal-usage-data-title">
                        <p className="header-main">Collecting and Using Your Data</p>
                    </section>

                    <article className="legal-usage-data-personal-data legal-usage-data-content-container">
                        <p className="header-small">Personal Data</p>
                        <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                    
                        <ul className="legal-usage-data-ul">
                            <li>None. No personal data is collected</li>
                        </ul>
                    </article>                        

                    <article className="legal-usage-data-usage-data legal-usage-data-content-container">
                        <p className="header-small">Usage Data</p>
                        <p>Usage Data is NOT collected when using the Service.</p>
                    </article>

                    <article className="legal-usage-data-other-data legal-usage-data-content-container">
                        <p className="header-small">Other Data Collected</p>
                        <p>This service collects data that is willingly inputted and submitted by the user, such as the drivebase of a FIRST Robotics Competition Robot. Data that is submitted is not traceable back to the user.</p>
                    </article>

                    <article className="legal-usage-data-using-data legal-usage-data-content-container">
                        <p className="header-small">Use of Your Data </p>
                        <p>Data that is collected by the Service is used to maintain operation of the service and is made public to all users.</p>
                        <p>Data that is collected may also be used for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>
                    </article>

                    <article className="legal-usage-data-retention legal-usage-data-content-container">
                        <p className="header-small">Retention of Your Data</p>
                        <p>The Company will retain Your Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your  Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
                    </article>

                    <article className="legal-usage-deleting-data legal-usage-data-content-container">
                        <p className="header-small">Delete Your Data</p>
                        <p>You do not have the right to delete or request that we assist in deleting the data that we have collected This is due to the fact that data that is sent to our servers are not traceable back to the device and user.</p>
                    </article>
                </section>
                
                <section className="legal-contacts">

                    <p className="header-main">Contact Us</p>
                    <p>If you have any questions about this Privacy Policy, You can contact us at <i>whslionsrobotics@gmail.com</i></p>

                </section>
            </div>
        </div>
    )
}
