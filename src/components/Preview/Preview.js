import React from 'react'
import './Preview.css'
import PreviewCard from '../Cards/PreviewCard';

const Preview = ({image, sale, unlock, price, name}) => {

    return (
        <div className="preview-card">
            <h3 className="preview-tag">Preview</h3>
            <PreviewCard image={image} sale={sale} price={price} unlock={unlock} name={name} />
        </div>
    )
}

export default Preview
