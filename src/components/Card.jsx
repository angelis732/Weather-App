import React from 'react';
import { Link } from 'react-router-dom';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="card">
        <div className="row">
            <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
        <Link to={`/ciudad/${id}`} style={{textDecoration: 'none'}}>
          <h5 className="card-title">{name}</h5>
        </Link>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p className='elementCard'>Min</p>
              <p className='elementCard'>{min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p className='elementCard'>Max</p>
              <p className='elementCard'>{max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

