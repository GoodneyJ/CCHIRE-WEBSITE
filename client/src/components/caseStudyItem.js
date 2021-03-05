import React from 'react'

export default function caseStudyItem(props) {
    return (
        <div className="case-study-item-container">
            <div className='case-study-image-container'>
                <p>img</p>
            </div>

            <div classNAme="case-study-text-container">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    )
}
