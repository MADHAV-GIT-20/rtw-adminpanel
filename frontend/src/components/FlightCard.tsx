import React from 'react';

const FlightCard = ({ airline, flightNumber, departureTime, duration, arrivalTime, price, meal, onTime, discount }) => {
  return (
    <div className="flight-card">
      <div className="flight-info">
        <img src={airline.logo} alt={`${airline.name} logo`} className="airline-logo" />
        <div className="flight-details">
          <div>
            <strong>{departureTime}</strong>
            <p>{airline.departureCity}</p>
          </div>
          <div>
            <p>{duration}</p>
            <p>{flightNumber}</p>
          </div>
          <div>
            <strong>{arrivalTime}</strong>
            <p>{airline.arrivalCity}</p>
          </div>
        </div>
      </div>
      <div className="flight-price">
        <p>{price}</p>
        <button>View Prices</button>
        {onTime && <span className="on-time">100% on time</span>}
      </div>
      {meal && <span className="meal-included">Free Meal</span>}
      {discount && <p className="discount">{discount}</p>}
    </div>
  );
};

export default FlightCard;
