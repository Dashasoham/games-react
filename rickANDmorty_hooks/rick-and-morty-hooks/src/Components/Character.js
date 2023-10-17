const Character = ({ apiData }) => {
  return (
    <div>
      <img src={apiData.image} alt='character' />{' '}
    </div>
  );
};

export default Character;
