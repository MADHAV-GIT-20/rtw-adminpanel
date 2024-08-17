import React, { useState } from "react";
import styles from './FlightBooking.module.css';

const FlightBooking: React.FC = () => {
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);
  const [travelClass, setTravelClass] = useState<string>("economy");

  const handleIncrement = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number,
    max: number
  ) => {
    if (value < max) {
      setter(value + 1);
    }
  };

  const handleDecrement = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number,
    min: number
  ) => {
    if (value > min) {
      setter(value - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      `Adults: ${adults}, Children: ${children}, Infants: ${infants}, Class: ${travelClass}`
    );
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles['flight-booking-form']}>
        <div className={styles['form-section']}>
          <label>Adults (12y+):</label>
          <div className={styles['counter']}>
            <button
              type="button"
              className={styles['counter-button']}
              onClick={() => handleDecrement(setAdults, adults, 1)}
            >
              -
            </button>
            <input type="number" value={adults} readOnly className={styles['counter-input']} />
            <button
              type="button"
              className={styles['counter-button']}
              onClick={() => handleIncrement(setAdults, adults, 9)}
            >
              +
            </button>
          </div>
        </div>

        <div className={styles['form-section']}>
          <label>Children (2y - 12y):</label>
          <div className={styles['counter']}>
            <button
              type="button"
              className={styles['counter-button']}
              onClick={() => handleDecrement(setChildren, children, 0)}
            >
              -
            </button>
            <input type="number" value={children} readOnly className={styles['counter-input']} />
            <button
              type="button"
              className={styles['counter-button']}
              onClick={() => handleIncrement(setChildren, children, 6)}
            >
              +
            </button>
          </div>
        </div>

        <div className={styles['form-section']}>
          <label>Infants (below 2y):</label>
          <div className={styles['counter']}>
            <button
              type="button"
              className={styles['counter-button']}
              onClick={() => handleDecrement(setInfants, infants, 0)}
            >
              -
            </button>
            <input type="number" value={infants} readOnly className={styles['counter-input']} />
            <button
              type="button"
              className={styles['counter-button']}
              onClick={() => handleIncrement(setInfants, infants, 6)}
            >
              +
            </button>
          </div>
        </div>

        <div className={styles['form-section']}>
          <label>Choose Travel Class:</label>
          <select
            value={travelClass}
            onChange={(e) => setTravelClass(e.target.value)}
            className={styles['travel-class-select']}
          >
            <option value="economy">Economy/Premium Economy</option>
            <option value="premium-economy">Premium Economy</option>
            <option value="business">Business</option>
            <option value="first-class">First Class</option>
          </select>
        </div>

        <button type="submit" className={styles['apply-button']}>
          Apply
        </button>
      </form>

      <div className={styles['fare-option-container']}>
        <h3>1 FARE OPTION available for your trip</h3>
        <div className={styles['fare-details']}>
          <p><strong>New Delhi → Benguluru</strong></p>
          <p>AirIndia · Sun, 27 Oct 24 · Departure at 06:10 · Arrival at 08:55</p>
          <div className={styles['fare-price']}>
            <span>₹ 6,339 per adult</span>
          </div>
          <ul className={styles['fare-info-list']}>
            <li>Baggage: 7 Kgs Cabin Baggage, 15 Kgs Check-in Baggage</li>
            <li>Flexibility: Cancellation fee starts at ₹ 2,999 (up to 4 days before departure), Date Change fee starts at ₹ 2,250(up to 4 days before departure)</li>
            <li>Seats, & More: Chargeable Seats</li>
          </ul>
          
        </div>

        <div className={styles['fare-buttons']}>
          {/* <button className={styles['lock-button']}>LOCK NOW</button> */}
          <button className={styles['book-button']}>BOOK NOW</button>
        </div>
      </div>
    </div>
  );
};

export default FlightBooking;