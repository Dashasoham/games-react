// import { Button } from 'bootstrap';
import { useState } from 'react';
// import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

// const data = [
//   { name: 'Anom', age: 19, gender: 'Male' },
//   { name: 'Megha', age: 19, gender: 'Female' },
//   { name: 'Subham', age: 25, gender: 'Male' },
// ];

function Description() {
  const [apiData, setApiData] = useState({});
  //   const [breedId, setBreedId] = useState('');

  //   const [isLoading, setIsLoading] = useState(false);

  const fetchData = (breedId) => {
    // setBreedId(breedId);

    // setIsLoading(true);

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
        // setIsLoading(false);
      })
      .catch((err) => {
        console.log(`error ${err}`);
        // setIsLoading(false);
      });
  };

  return (
    <div className='d-flex justify-content-center'>
      {/* <button onClick={fetchData}>Click</button> */}
      <tbody>
        <table>
          <thead>
            <tr>
              <th>
                {' '}
                <Button onClick={() => fetchData('siam')} breedId='siam'>
                  Siamese
                </Button>
              </th>
              <th>
                {' '}
                <Button onClick={fetchData} />
              </th>
              <th>
                {' '}
                <Button onClick={fetchData} />
              </th>
            </tr>
          </thead>
        </table>

        {/* {isLoading ? (
        <p>Loading...</p>
      ) : ( */}
        <table>
          <thead>
            <tr>
              <th>Breed</th>
              <th>Origin</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {apiData && apiData.length > 0 ? (
              apiData.map((item, key) => (
                <tr key={key}>
                  <td>{item.url}</td>
                  <td>{item.width}</td>
                  <td>{item.height}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='3'>No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </tbody>
      {/* )} */}
    </div>
  );
}

export default Description;
