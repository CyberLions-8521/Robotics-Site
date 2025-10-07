import React from 'react'
import { useState } from 'react'

export default function RobotShowcase({ robotBGImage, robotYear, robotName, robotSpecs, CADlink, codeLink }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div 
            className='robot-showcase'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img 
                src={robotBGImage} 
                alt='Robot Showcase Background' 
                className={`robot-showcase-background-image${hovered ? ' color' : ''}`}
            />
            <p className='robot-showcase-year'>{robotYear}</p>

            <section className='robot-showcase-description'>
                <p className='robot-showcase-description-robot-name'>{robotName}</p>

                <section className='robot-showcase-description-row'>
                    <section className='robot-showcase-description-specs'>
                        <p className='robot-showcase-description-title'>Specs</p>
                        <ul className='robot-showcase-description-ul'>
                            <li className='robot-showcase-description-li'>{robotSpecs.one}</li>
                            <li className='robot-showcase-description-li'>{robotSpecs.two}</li>
                            <li className='robot-showcase-description-li'>{robotSpecs.three}</li>
                        </ul>
                    </section>

                    <section className='robot-showcase-description-specs'>
                        <p className='robot-showcase-description-title'>Resources</p>
                        <ul className='robot-showcase-description-ul'>
                            <li className='robot-showcase-description-li'>
                                {CADlink ? (
                                    <a
                                        className='robot-showcase-description-li'
                                        href={CADlink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        CAD &#x2197;
                                    </a>
                                ) : (
                                    <li className="robot-showcase-description-li">CAD (N/A)</li>
                                )}
                            </li>
                            <li className='robot-showcase-description-li'>
                                {codeLink ? (
                                    <a
                                        className='robot-showcase-description-li'
                                        href={codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Codebase &#x2197;
                                    </a>
                                ) : (
                                    <li className="robot-showcase-description-li">Codebase (N/A)</li>
                                )}
                            </li>
                        </ul>
                    </section>
                </section>
            </section>
        </div>
)
}
