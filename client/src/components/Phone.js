import React from 'react';

const Phone = ({phone: {name, image_url}, id, onClick}) => (
    <div className="phone" onClick={() => onClick(id)} style={{backgroundImage: "url(" + image_url + ")"}}>
        <div className="title">
            <h3>{name}</h3>
        </div>
    </div>
)

export default Phone;