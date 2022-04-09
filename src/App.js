import { useEffect, useState } from 'react';
import { useLocation } from './context/locationContext';
import { getClosestPlaces } from './services/places';
import { loadingStatus } from './constants';
import { defaultLocation } from './constants';
import Places from './components/Places';
import Button from '@mui/material/Button';
import './App.scss';

const placesNum = 10;

const App = () => {
  const { location, setLocation } = useLocation();

  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(loadingStatus.NOT_STARTED);

  useEffect(() => {
    const getPlaces = async () => {
      try {
        const closestPlaces = await getClosestPlaces(location, placesNum);
        setPlaces(closestPlaces);
        setLoading(loadingStatus.READY);
      } catch {
        setLoading(loadingStatus.FAILED);
      }
    };
    if (location) getPlaces();
  }, [location]);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setLocation(userLocation);
      },
      () => setLocation(defaultLocation),
    );
  };

  const getClosestFoodTrucks = async () => {
    setLoading(loadingStatus.IN_PROGRESS);
    getLocation();
  };

  return (
    <div className="App">
      <Button onClick={getClosestFoodTrucks} variant="contained">
        Find closest foodtrucks
      </Button>
      <Places loading={loading} places={places} />
    </div>
  );
};

export default App;
