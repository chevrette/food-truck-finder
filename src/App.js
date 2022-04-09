import { useCallback, useEffect } from 'react';
import { useLocation } from './context/locationContext';
import { exampleLocation } from './constants';
import Places from './components/Places';
import './App.scss';

const App = () => {
  const { location, setLocation } = useLocation();

  const getLocation = useCallback(() => {
    setLocation(exampleLocation);
  }, [setLocation]);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  return (
    <div className="App">
      {location && <p>{location.latitude}</p>}
      <Places />
    </div>
  );
};

export default App;
