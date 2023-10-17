import { useState } from 'react';
import ActivatedSearch from './ActivatedSearch';

const SearchBarActivate = () => {
  const [activeCheckbox, setActiveCheckbox] = useState(false);

  //   useEffect(() => {
  //     // console.log(activeCheckbox);
  //     setActiveCheckbox(false);
  //   }, []);

  const onClickChange = () => {
    if (activeCheckbox) {
      setActiveCheckbox(false);
    } else {
      setActiveCheckbox(true);
    }
  };
  return (
    <div>
      <div className='flex justify-start w-2/5 items-center border-4 border-teal-600 mx-auto p-4 object-right my-10'>
        {' '}
        <input
          type='checkbox'
          //   id='my-modal-3'
          onChange={onClickChange}
          className='modal-toggle'
        />
        <label className='mx-5'>Mount the search bar</label>
      </div>
      {activeCheckbox && <ActivatedSearch />}
    </div>
  );
};

export default SearchBarActivate;
