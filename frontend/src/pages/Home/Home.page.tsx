import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

const HomePage: React.FC = () => {
  const [tripType, setTripType] = useState('oneway');
  const [specialFare, setSpecialFare] = useState('regular');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.box}>
        <div className={styles.header}>
          <img src="https://risicindia.com/wp-content/uploads/2022/07/Logo-2.jpeg" alt="Logo" className={styles.logo} />
          <button onClick={handleLogin} className={styles.loginButton}>Login</button>
        </div>

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
                <input type="text" placeholder="Enter city" />
              </div>
              <div className={styles.column}>
                <label>To</label>
                <input type="text" placeholder="Enter city" />
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
                  <input type="text" placeholder="Enter city" />
                </div>
                <div className={styles.column}>
                  <label>To</label>
                  <input type="text" placeholder="Enter city" />
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

        {category === 'hotels' && (
          <div className={styles.columns}>
            <div className={styles.column}>
              <label>City/Location</label>
              <input type="text" placeholder="Enter city or location" />
            </div>
            <div className={styles.column}>
              <label>Check-In</label>
              <input type="date" />
            </div>
            <div className={styles.column}>
              <label>Check-Out</label>
              <input type="date" />
            </div>
            <div className={styles.column}>
              <label>Rooms And Guests</label>
              <input type="text" placeholder="Enter rooms and guests" />
            </div>
            <div className={styles.column}>
              <label>Price Per Night</label>
              <input type="text" placeholder="Enter price per night" />
            </div>
          </div>
        )}

        {category === 'packages' && (
          <div className={styles.columns}>
            <div className={styles.column}>
              <label>From City</label>
              <input type="text" placeholder="Enter from city" />
            </div>
            <div className={styles.column}>
              <label>To City</label>
              <input type="text" placeholder="Enter to city" />
            </div>
            <div className={styles.column}>
              <label>Depart Date</label>
              <input type="date" />
            </div>
          </div>
        )}

        <button className={styles.searchButton}>SEARCH</button>
      </div>
    </div>
  );
};

export default HomePage;
