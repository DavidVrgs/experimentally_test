import React from 'react';
import "./section_card.css"

/** Components */

interface ISectionCard{
    image: string,
    title: string
}

const SectionCard: React.FC<ISectionCard> = ({image, title}) => {
    return (
        <div className="section_card" style={{backgroundImage: `url(${image})`}}>
            <div className="section_card_title">
                <span>{title}</span>
            </div>
        </div>
    )
}

export default SectionCard;