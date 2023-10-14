import { useState } from 'react';
const useDescription = () => {
  const [apiData, setApiData] = useState([]);

  const fetchData = (breedId) => {
    let options = {
      method: 'GET',
      headers: {
        'x-api-key':
          'live_wNK7FwbRhxA1N3LrcVBZac6rXeyLaRHiNznaxMEX6XUj7AygBg8V1W4p8Cdq4Z9x',
      },
    };

    let url = `https://api.thecatapi.com/v1/images/search?breed_id=${breedId}`;

    fetch(url, options)
      .then((res) => res.json()) // parse response as JSON
      .then((data) => {
        console.log(data);
        setApiData(data);
      })
      .catch((err) => {
        console.log(`error ${err}`);
      });
  };
  return {
    apiData,
    fetchData,
  };
};

export default useDescription;
