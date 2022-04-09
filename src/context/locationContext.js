import React, { createContext, useContext, useState } from 'react';

const LocationContext = createContext(undefined);

const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error(`useLocation must be used within a LocationContext`);
  }
  return context;
};

const LocationProvider = (children) => {
  const [location, setLocation] = useState();

  return <LocationContext.Provider value={{ location, setLocation }} {...children} />;
};

export { LocationProvider, useLocation };
