import React from "react";



const Menu = (props) => {
    const changeProjectHandler = (event) => {
        props.changeProjectHandler(event.target.value);
    }

    return (
        <div className="bcm-menu" role="menu">
            <select onChange={changeProjectHandler}>
                {props.projects.map((project) => {
                    return <option key={project.id}>{project.id}</option>
                })}
            </select>
        </div>
    )
}

export default Menu;