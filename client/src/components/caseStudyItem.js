import React from 'react'

export default function caseStudyItem(props) {


    const styles = {
        backgroundImage: `url(${props.img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '5px'

    }


    return (
        <div className="case-study-item-container">
            <div className='case-study-image-container'>
                <p style={styles}></p>
            </div>

            <div className="case-study-text-container">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    )
}
