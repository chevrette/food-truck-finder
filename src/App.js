import { useCallback, useEffect } from 'react';
import { useLocation } from './context/locationContext';
import { defaultLocation } from './constants';
import Places from './components/Places';
import './App.scss';

const App = () => {
  const { location, setLocation } = useLocation();

  const getLocation = useCallback(() => {
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
  }, [setLocation]);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  return <div className="App">{location && <Places />}</div>;
};

export default App;
