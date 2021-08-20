import React from 'react'

export default function EducationItem(props) {
    return (
        <div className="education-item">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <img src={`./public_assets/images/${props.image}`} alt={props.image} />
        </div>
    )
}
