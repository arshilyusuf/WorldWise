import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import PropTypes from "prop-types";
import Message from "./Message";
import CountryItem from "./CountryItem";

CountriesList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      cityName: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      emoji: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      notes: PropTypes.string,
      position: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
      }).isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function CountriesList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return (
      <Message message="Add to your list by clicking any city on the map" />
    );
  }

  // Using `some()` for unique countries
  const countries = cities.reduce((arr, city) => {
    if (!arr.some((el) => el.country === city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    }
    return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country, index) => (
        <CountryItem country={country} key={index} />
      ))}
    </ul>
  );
}

export default CountriesList;
