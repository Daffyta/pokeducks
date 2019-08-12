import React from 'react';

const Card = ({ pokemon }) => (
    <div className="card">
        <div className="card-image">
            <img src={ pokemon.sprites.front_default } />
        </div>
        <div className="card-content">
            <span className="card-title">{pokemon.name}</span>  
        </div>
    </div>
);

export default Card;