import React from 'react';

const PhoneDetailComponent = ({phone: {name, brand, color, price_usd, image_url}, closeDetails}) => (
    <div className="phone-detail">
        <div className="inner">
            <button onClick={closeDetails}>Close</button>
            <div className="phone-image" style={{backgroundImage: "url(" + image_url + ")"}}></div>
            <section className="details">
                <h3 className="title">{name}</h3>
                <p className="brand">{brand}</p>
                <p className="color">Color: {color}</p>
                <p className="price">${price_usd}</p>
            </section>
        </div>
    </div>
)

export default PhoneDetailComponent;