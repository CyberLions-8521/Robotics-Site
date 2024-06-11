import React from 'react'

export default function RobotShowcase({ robotBGImage, robotYear, robotName, robotSpecs }) {
  return (
    <div className='robot-showcase'>
        <img src={robotBGImage} alt='Robot Showcase Background' className='robot-showcase-background-image' />
        <p className='robot-showcase-year'>{robotYear}</p>

        <section className='robot-showcase-description'>
            <p className='robot-showcase-description-robot-name'>{robotName}</p>

            <section className='robot-showcase-description-specs'>
                <p className='robot-showcase-description-specs-title'>Specs:</p>

                <ul className='robot-showcase-description-specs-ul'>
                    <li className='robot-showcase-description-specs-li'>{robotSpecs.one}</li>
                    <li className='robot-showcase-description-specs-li'>{robotSpecs.two}</li>
                    <li className='robot-showcase-description-specs-li'>{robotSpecs.three}</li>
                </ul>

            </section>
        </section>
    </div>
)
}
