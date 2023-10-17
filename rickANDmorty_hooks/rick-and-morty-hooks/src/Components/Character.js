// import { useState } from 'react';
const Character = ({ apiData, randomClicked }) => {
  //   const generateRandomNumber = () => {
  //     return Math.floor(Math.random() * 650) + 1;
  //   };
  //   const [randomClickedApi, setRandomClickedApi] = useState({
  //     id: generateRandomNumber(),
  //   });

  return (
    <div className='flex justify-center w-2/5 items-center  mx-auto p-4 object-right my-10 '>
      {randomClicked ? (
        <div>
          <img
            src={apiData.image}
            alt='character'
            className='border-4 border-teal-600'
          />{' '}
          <p className='text-lg'>{apiData.name}</p>{' '}
        </div>
      ) : (
        <div>
          <img
            src={apiData.image}
            alt='character'
            className='border-4 border-teal-600'
          />{' '}
          <p className='text-lg'>{apiData.name}</p>
        </div>
      )}
    </div>
  );
};

export default Character;
