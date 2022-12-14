// import { useState } from 'react';

// import { db } from '../../firebase';
// import { AuthContext } from '../../context/authContext';

export const Filter = ({ setUserName, handleFilter, userName }) => {
   const handleKey = e => {
      e.code === 'Enter' && handleFilter();
      console.log('click');
   };

   return (
      <input
         onKeyDown={handleKey}
         onChange={e => setUserName(e.target.value)}
         type="text"
         value={userName}
         placeholder="find a friend here"
         className="searchBar"
      />
   );
};
