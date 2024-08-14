import React from 'react';
import styles from './FlightList.module.css';

interface FlightOption {
  airline: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  onTime: string;
  meals: string;
}

const FlightList: React.FC = () => {
  const flightOptions: FlightOption[] = [
    {
      airline: 'Air India',
      flightNumber: 'AI 803',
      departureTime: '06:10',
      arrivalTime: '08:55',
      duration: '02h 45m',
      price: 6339,
      onTime: '100%',
      meals: 'Free Meal',
    },
    {
      airline: 'Air India',
      flightNumber: 'AI 813',
      departureTime: '08:00',
      arrivalTime: '11:00',
      duration: '03h',
      price: 6339,
      onTime: '100%',
      meals: 'Free Meal',
    },
    {
      airline: 'Vistara',
      flightNumber: 'UK 811',
      departureTime: '06:15',
      arrivalTime: '09:05',
      duration: '02h 50m',
      price: 6665,
      onTime: '100%',
      meals: 'Free Meal',
    },
  ];

  return (
    <div className={styles.flightListContainer}>
      <div className={styles.header}>
        <div className={styles.sortOptions}>
          <button className={styles.sortButton}>CHEAPEST</button>
          <button className={styles.sortButton}>NON STOP FIRST</button>
          <button className={styles.sortButton}>YOU MAY PREFER</button>
        </div>
      </div>
      <div className={styles.flightList}>
        {flightOptions.map((flight, index) => (
          <div key={index} className={styles.flightOption}>
            <div className={styles.flightDetails}>
              <div className={styles.airlineLogo}>
                <img
                  src={flight.airline === 'Air India' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7DCN-Kw6iFYufGv9KLDdHR3AdmbYhNzGdA&s' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlD_CFs8_UsBROZyFrZkExAeY0Ot9764OtLw&s'}
                  alt={flight.airline}
                />
              </div>
              <div className={styles.flightInfo}>
                <div className={styles.timeDetails}>
                  <div>{flight.departureTime}</div>
                  <div>{flight.duration}</div>
                  <div>{flight.arrivalTime}</div>
                </div>
                <div className={styles.locationDetails}>
                  <div>New Delhi</div>
                  <div>Bengaluru</div>
                </div>
                <div className={styles.meals}>{flight.meals}</div>
              </div>
              <div className={styles.priceDetails}>
                <div className={styles.price}>₹ {flight.price}</div>
                <div className={styles.onTime}>{flight.onTime} on time</div>
                <button className={styles.viewPricesButton}>VIEW PRICES</button>
              </div>
            </div>
            {/* <div className={styles.discountCode}>
              Get FLAT Rs. {flight.airline === 'Vistara' ? '375' : '299'} OFF using code MMTSUPER
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightList;