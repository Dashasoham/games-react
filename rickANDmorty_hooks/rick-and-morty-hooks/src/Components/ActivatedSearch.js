import { useState } from 'react';
import Character from './Character';

const ActivatedSearch = () => {
  const [pickedNumber, setPickedNumber] = useState(0);
  const [apiData, setApiData] = useState({});

  const handleNumberChange = (event) => {
    setPickedNumber(event.target.value);
  };
  const callApi = () => {
    fetch(`https://rickandmortyapi.com/api/character/${pickedNumber}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setApiData(data);
      })
      .catch((error) => console.error(error));
  };

  const onClick = () => {
    if (pickedNumber) {
      callApi();
    } else alert('Pick a number');
  };

  return (
    <div>
      <input
        type='number'
        onChange={handleNumberChange}
        value={pickedNumber}
        placeholder='Pick a number'
        className='border-4 border-solid rounded-xl p-3'
      ></input>
      <button
        onClick={onClick}
        className='bg-transparent hover:bg-blue-500  font-semibold hover:text-white py-3 px-4 ml-2 border-4 hover:border-transparent rounded-xl'
      >
        Search
      </button>
      <button className='bg-transparent hover:bg-blue-500  font-semibold hover:text-white py-3 px-4 ml-2 border-4 hover:border-transparent rounded-xl'>
        Random
      </button>
      <p className='m-2'>Which Rick and Morty Character?</p>
      <Character apiData={apiData} />
    </div>
  );
};

export default ActivatedSearch;
