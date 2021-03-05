import React from 'react'

import CallToAction from '../components/callToAction.js';
import Footer from '../components/footer.js'

import '../css/App.css';


export default function ArticlePage(props) {
    document.title = `CCHI:RE | ${props.title}`

    return (
        <div className="article-container">
            <CallToAction ctaImage={props.img} title={props.title} subTitle=""/>
            <p className="article-text">{props.text}</p>
            <Footer />
        </div>
    )
}
