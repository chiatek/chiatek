import React from "react";

function Project(props) {
    const { title, image, category } = props.fields;

    return (
        <div className="item" onClick={() => props.handleShow(props.fields)}>
            <button>
                <img src={image} alt={title} />
                <div className="overlay">
                    <h4>{title}</h4>
                    <h5>{category}</h5>
                    <h3>+</h3>
                </div>
            </button>
        </div>
    )
}

export default Project;