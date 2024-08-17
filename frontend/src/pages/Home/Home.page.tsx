import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

const flightData = [
  {
    airline: 'Air India',
    flightNumber: 'AI 803',
    departureTime: '06:10',
    arrivalTime: '08:55',
    duration: '02 h 45 m',
    from: 'New Delhi',
    to: 'Bengaluru',
    price: '₹ 6,339',
    meal: 'Free Meal',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7DCN-Kw6iFYufGv9KLDdHR3AdmbYhNzGdA&s',
  },
  {
    airline: 'Air India',
    flightNumber: 'AI 813',
    departureTime: '08:00',
    arrivalTime: '11:00',
    duration: '03 h',
    from: 'New Delhi',
    to: 'Bengaluru',
    price: '₹ 6,339',
    meal: 'Free Meal',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7DCN-Kw6iFYufGv9KLDdHR3AdmbYhNzGdA&s',
  },
  {
    airline: 'Vistara',
    flightNumber: 'UK 811',
    departureTime: '06:15',
    arrivalTime: '09:05',
    duration: '02 h 50 m',
    from: 'New Delhi',
    to: 'Bengaluru',
    price: '₹ 6,665',
    meal: 'Free Meal',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlD_CFs8_UsBROZyFrZkExAeY0Ot9764OtLw&s',
  },
];

const cities = ['Select', 'New Delhi', 'Mumbai', 'Bengaluru', 'Kolkata', 'Chennai'];

const HomePage: React.FC = () => {
  const [tripType, setTripType] = useState('oneway');
  const [specialFare, setSpecialFare] = useState('regular');
  const [category, setCategory] = useState('');
  const [showFlights, setShowFlights] = useState(false);
  const [fromCity, setFromCity] = useState(cities[0]); // Default to 'Select'
  const [toCity, setToCity] = useState(cities[0]); // Default to 'Select'
  const navigate = useNavigate();

  const handleSearch = () => {
    if (fromCity === 'Select' || toCity === 'Select') {
      alert('Please select both From and To cities');
      return;
    }
    setShowFlights(true);
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.box}>
        <div className={styles.topNavbar}>
          <div className={styles.rightSection}>
            <span>USER NAME</span>
            <button onClick={() => navigate('/logout')}>LOGOUT</button>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.navbar}>
            <button onClick={() => setCategory('flights')}>Flights</button>
            <button onClick={() => setCategory('hotels')}>Hotels</button>
            <button onClick={() => setCategory('villas')}>Villas</button>
            <button onClick={() => setCategory('packages')}>Holiday Packages</button>
          </div>

          {category === 'flights' && (
            <>
              <div className={styles.tripType}>
                <label>
                  <input
                    type="radio"
                    name="tripType"
                    value="oneway"
                    checked={tripType === 'oneway'}
                    onChange={() => setTripType('oneway')}
                  />
                  One Way
                </label>
                <label>
                  <input
                    type="radio"
                    name="tripType"
                    value="roundtrip"
                    checked={tripType === 'roundtrip'}
                    onChange={() => setTripType('roundtrip')}
                  />
                  Round Trip
                </label>
                <label>
                  <input
                    type="radio"
                    name="tripType"
                    value="multicity"
                    checked={tripType === 'multicity'}
                    onChange={() => setTripType('multicity')}
                  />
                  Multi City
                </label>
              </div>

              <div className={styles.columns}>
                <div className={styles.column}>
                  <label>From</label>
                  <select value={fromCity} onChange={(e) => setFromCity(e.target.value)}>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.column}>
                  <label>To</label>
                  <select value={toCity} onChange={(e) => setToCity(e.target.value)}>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
                {tripType !== 'oneway' && (
                  <div className={styles.column}>
                    <label>Return</label>
                    <input type="date" />
                  </div>
                )}
                <div className={styles.column}>
                  <label>Departure</label>
                  <input type="date" />
                </div>
              </div>

              {tripType === 'multicity' && (
                <div className={styles.columns}>
                  <div className={styles.column}>
                    <label>From</label>
                    <select>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.column}>
                    <label>To</label>
                    <select>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button className={styles.addCity}>Add Another City</button>
                </div>
              )}

              <div className={styles.specialFare}>
                <label>Select a special fare:</label>
                <label>
                  <input
                    type="radio"
                    name="specialFare"
                    value="regular"
                    checked={specialFare === 'regular'}
                    onChange={() => setSpecialFare('regular')}
                  />
                  Regular
                </label>
                <label>
                  <input
                    type="radio"
                    name="specialFare"
                    value="student"
                    checked={specialFare === 'student'}
                    onChange={() => setSpecialFare('student')}
                  />
                  Student
                </label>
                <label>
                  <input
                    type="radio"
                    name="specialFare"
                    value="senior"
                    checked={specialFare === 'senior'}
                    onChange={() => setSpecialFare('senior')}
                  />
                  Senior Citizen
                </label>
                <label>
                  <input
                    type="radio"
                    name="specialFare"
                    value="armed"
                    checked={specialFare === 'armed'}
                    onChange={() => setSpecialFare('armed')}
                  />
                  Armed Forces
                </label>
                <label>
                  <input
                    type="radio"
                    name="specialFare"
                    value="doctor"
                    checked={specialFare === 'doctor'}
                    onChange={() => setSpecialFare('doctor')}
                  />
                  Doctor and Nurses
                </label>
              </div>
            </>
          )}

          <button className={styles.searchButton} onClick={handleSearch}>
            SEARCH
          </button>

          {showFlights && (
            <div className={styles.flightResults}>
              <h2>Flights sorted by Lowest fares on this route</h2>
              {flightData.map((flight, index) => (
                <div key={index} className={styles.flightCard}>
                  <div className={styles.flightDetails}>
                    <span>{flight.meal}</span>
                    <div className={styles.airlineInfo}>
                      <img src={flight.logo} alt={`${flight.airline} logo`} className={styles.airlineLogo} />
                      <strong>{flight.airline}</strong>
                      <span>{flight.flightNumber}</span>
                    </div>
                    <div>
                      <strong>{flight.departureTime}</strong> -{' '}
                      <span>{flight.duration}</span> -{' '}
                      <strong>{flight.arrivalTime}</strong>
                    </div>
                    <div>{flight.from} - {flight.to}</div>
                    <div className={styles.flightPrice}>{flight.price}</div>
                    <button className={styles.viewDetailsButton}>VIEW DETAILS</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;