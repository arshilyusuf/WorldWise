import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import PropTypes from "prop-types";
import Message from "./Message";

CityList.propTypes = {
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
function CityList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }
  if(!cities.length){
        return <Message message="Add to your list by clicking any city on the map"/>
    }
  
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
