import PropTypes from "prop-types";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  const { country: countryName, emoji } = country;

  return (
    <li className={styles.countryItem}>
      <span>{emoji}</span>
      <span>{countryName}</span>
    </li>
  );
}

CountryItem.propTypes = {
  country: PropTypes.shape({
    country: PropTypes.string.isRequired, // country name
    emoji: PropTypes.string.isRequired, // emoji for the country
  }).isRequired,
};

export default CountryItem;
