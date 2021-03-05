import React from 'react'
import { NavLink } from 'react-router-dom';

export default function articleItem(props) {

    const styles = {
        backgroundImage: `url(${props.img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '5px'

    }

    return (
        <div className="article-item-container">
            <div className="article-image-container">
                <p style={styles}></p>
            </div>

            <div className="article-bottom-half">
                <div className="article-text-container">
                    <h1 className="article-title">{props.title}</h1>
                    <p className="article-text">{props.text}</p>
                </div>
                <NavLink to={`${props.to}`} className="article-button">Read More</NavLink>
            </div>
        </div>
    )
}
