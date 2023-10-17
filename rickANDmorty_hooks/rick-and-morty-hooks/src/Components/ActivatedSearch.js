import { useState } from 'react';
import Character from './Character';

const ActivatedSearch = () => {
  const [pickedNumber, setPickedNumber] = useState('');
  const [apiData, setApiData] = useState({});
  const [btnClicked, setBtnClicked] = useState(false);
  const [randomClicked, setRandomClicked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleNumberChange = (event) => {
    setPickedNumber(event.target.value);
  };
  const callApi = (url) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then((data) => {
        console.log(data);
        setApiData(data);
        setErrorMessage(null);
      })
      .catch((error) => {
        console.log('There was an error', error);
        setErrorMessage(`There was an error: ${error.message}`);
      });
  };

  const onClickSearch = () => {
    if (pickedNumber) {
      setBtnClicked(true);
      const url = `https://rickandmortyapi.com/api/character/${pickedNumber}`;
      callApi(url);
      setPickedNumber('');
    } else alert('Pick a number');
  };
  const onClickRandom = () => {
    setBtnClicked(true);

    const random = Math.floor(Math.random() * 826) + 1;
    const url = `https://rickandmortyapi.com/api/character/${random}`;
    callApi(url);
    setRandomClicked(true);
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
        onClick={onClickSearch}
        className='bg-transparent hover:bg-green-600  font-semibold hover:text-white py-3 px-4 ml-2 border-4 hover:border-transparent rounded-xl'
      >
        Search
      </button>
      <button
        onClick={onClickRandom}
        className='bg-transparent hover:bg-green-500  font-semibold hover:text-white py-3 px-4 ml-2 border-4 hover:border-transparent rounded-xl'
      >
        Random
      </button>
      <p className='m-2'>Which Rick and Morty Character? Pick 1-826</p>
      {btnClicked && !errorMessage && (
        <Character apiData={apiData} randomClicked={randomClicked} />
      )}
      <div>
        {errorMessage && <h1 className='text-orange-900'>{errorMessage}</h1>}
      </div>
    </div>
  );
};

export default ActivatedSearch;
