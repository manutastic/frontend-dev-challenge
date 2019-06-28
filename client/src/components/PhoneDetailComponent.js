import React from 'react';

const PhoneDetailComponent = ({phone: {name, image_url}, closeDetails}) => (
    <div className="phone-detail">
        <div className="inner">
            <button onClick={closeDetails}>Close</button>
            <div class="phone-image" style={{backgroundImage: "url(" + image_url + ")"}}></div>
            <div className="title">
                <h3>{name}</h3>
            </div>
        </div>
    </div>
)

export default PhoneDetailComponent;