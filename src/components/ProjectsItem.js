import React from 'react';
import './styles/projectItems.css';

export default function ProyectsItem(props) {

    const data = props.data;

    return (
        <div className="projects scroll">

            {
                data.map((project) => { 

                    let classProyceto = "item-project-right";

                    if (project.id % 2 === 0 ) {
                        classProyceto = "item-project-left";
                    }else{
                        classProyceto = "item-project-right"
                    }

                    return(
                        <div key={project.id} className={`item-project ${classProyceto}`}>

                            <div className="info-project">
                                <h4>{project.detail}</h4>
                                <h3>{project.name}</h3>
                                <div className="details-project">
                                    <p>{project.description}</p>
                                </div>
                            </div>

                            <div className="img-project">
                                <img 
                                    src={`./public_assets/images/${project.image}`} 
                                    alt={project.image} 
                                />
                            </div>

                        </div>
                    );
                })
            }
            

        </div>
    )
}
