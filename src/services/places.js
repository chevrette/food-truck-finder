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

const calculateDistance = (l1, l2) => {
  const pi = 0.017453292519943295;
  const r = 6371; // Earth radius
  const cos = Math.cos;
  const res =
    0.5 -
    cos((l2.latitude - l1.latitude) * pi) / 2 +
    (cos(l1.latitude * pi) *
      cos(l2.latitude * pi) *
      (1 - cos((l2.longitude - l1.longitude) * pi))) /
      2;
  return 2 * r * Math.asin(Math.sqrt(res));
};

const filterPlacesByFields = (places) => {
  return places.map(
    ({ objectid, fooditems, distance, address, locationdescription, dayshours, ...place }) => {
      return { objectid, fooditems, distance, address, locationdescription, dayshours };
    },
  );
};

export const getClosestPlaces = async (location, count) => {
  const allPlaces = await getAllPlaces();
  for (const place of allPlaces) {
    place.distance = calculateDistance(location, place.location);
  }
  allPlaces.sort((p1, p2) => p1.distance - p2.distance);
  return filterPlacesByFields(allPlaces.slice(0, count));
};
