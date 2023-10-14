import Button from 'react-bootstrap/Button';
import useDescription from '../hooks/useDescription';

function Description() {
  const { apiData, fetchData } = useDescription();

  return (
    <div className='d-flex justify-content-center'>
      <tbody>
        <Button
          onClick={() => fetchData('siam')}
          breedId='siam'
          className='m-2'
        >
          Siamese
        </Button>
        <Button
          onClick={() => fetchData('munc')}
          breedId='munc'
          className='m-2'
        >
          Munchkin
        </Button>
        <Button
          onClick={() => fetchData('pixi')}
          breedId='pixi'
          className='m-2'
        >
          Pixie-bob
        </Button>{' '}
        {/* {isLoading ? (
        <p>Loading...</p>
      ) : ( */}
        <div>
          {apiData.length > 0 && apiData[0].url ? (
            <img
              src={apiData[0].url}
              alt='cat'
              style={{ width: '60%', height: '60%' }}
            />
          ) : (
            <div colSpan='3'>No image available</div>
          )}
        </div>
        <table
          className='table table-bordered mt-5'
          style={{ width: '800px', margin: '0 auto' }}
        >
          <thead>
            <tr>
              <th>Breed</th>
              <th>Origin</th>
              <th>Description</th>
            </tr>

            {apiData && apiData.length > 0 ? (
              apiData.map((item, key) => (
                <tr key={key}>
                  <td>{item.breeds[0].name}</td>

                  <td>{item.breeds[0].origin}</td>
                  <td>{item.breeds[0].description}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='3'>No data available</td>
              </tr>
            )}
          </thead>
        </table>
      </tbody>
    </div>
  );
}

export default Description;
