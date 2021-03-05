import React from 'react'

export default function serviceItem(props) {
    return (
        <div className='service-item-container'>
            <h2 className="service-heading">Service Type Heading</h2>
            <p className="service-text">{props.servOne}</p>
            <p className="service-text">{props.servTwo}</p>
            <p className="service-text">{props.servThree}</p>
        </div>
    )
}
