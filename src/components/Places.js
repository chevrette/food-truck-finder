import { useState } from 'react';
import { useLocation } from './../context/locationContext';
import { getClosestPlaces } from './../services/places';
import { loadingStatus } from './../constants';

const placesNum = 10;

const Places = () => {
  const { location } = useLocation();

  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(loadingStatus.NOT_STARTED);

  const getClosestFoodTrucks = async () => {
    try {
      setLoading(loadingStatus.IN_PROGRESS);
      const closestPlaces = await getClosestPlaces(location, placesNum);
      setPlaces(closestPlaces);
      setLoading(loadingStatus.READY);
    } catch {
      setLoading(loadingStatus.FAILED);
    }
  };

  return (
    <div>
      <button onClick={getClosestFoodTrucks}>Find closest foodtrucks</button>
      {loading === loadingStatus.IN_PROGRESS && <p>Loading...</p>}
      {loading === loadingStatus.FAILED && (
        <p>Sorry, we can't get food trucks' list at this moment</p>
      )}
      {loading === loadingStatus.READY &&
        places.map((place) => <p key={place.objectid}>{place.fooditems}</p>)}
    </div>
  );
};

export default Places;
