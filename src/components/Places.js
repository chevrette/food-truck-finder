const Places = ({ places }) => {
  return (
    <div>
      {places.map((place) => (
        <p>{place.fooditems}</p>
      ))}
    </div>
  );
};

export default Places;
