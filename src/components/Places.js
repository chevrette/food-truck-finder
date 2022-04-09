import { loadingStatus } from './../constants';
import PlacesTable from './../components/PlacesTable';

const Places = ({ loading, places }) => {
  return (
    <div>
      {loading == loadingStatus.NOT_STARTED && (
        <p>Click button to find food trucks in your location</p>
      )}
      {loading === loadingStatus.IN_PROGRESS && <p>Loading...</p>}
      {loading === loadingStatus.FAILED && (
        <p>Sorry, we can't get food trucks' list at this moment</p>
      )}
      {loading === loadingStatus.READY && places && places.length && (
        <PlacesTable places={places} />
      )}
    </div>
  );
};

export default Places;
