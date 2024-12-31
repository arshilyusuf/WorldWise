import PropTypes from "prop-types";
import styles from "./CityItem.module.css";
import {Link} from 'react-router-dom'
CityItem.propTypes = {
  city: PropTypes.shape({
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
  }).isRequired,
};
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));
function CityItem({ city }) {
  const { cityName, id,emoji,date, position } = city;

  
  return (
    <li >
      <Link className={styles.cityItem} to ={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <span className={styles.emoji}>{emoji}</span>
        <h2 className={styles.name}>{cityName}</h2>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
