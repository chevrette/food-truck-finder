import { endpoints } from '../config';

const getAllPlaces = async () => {
  const params = {
    method: 'GET',
  };
  const response = await fetch(endpoints.getFoodTrucks, params);
  if (!response || !response.ok) {
    return Promise.reject();
  }
  const data = await response.json();
  return data;
};

export const getClosestPlaces = async () => {
  const allPlaces = await getAllPlaces();
  return allPlaces;
};
