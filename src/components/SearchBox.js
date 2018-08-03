import React from 'react';

const SearchBox = ({ searchChange }) => {
  console.log("SEARCHBOX")
  return (
    <div className='pa2'>
      <input
       /*PWA, for accesability, screenreaders etc*/
        aria-label="Search Robots"
        
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;