import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { SearchIcon } from 'components/icons';

const Search = () => {
  const [text, setText] = useState('');
  const history = useHistory();

  return (
    <div className='header__center'>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type='text'
        placeholder='Search By City'
      />
      <SearchIcon
        className='header__searchIcon'
        onClick={() => {
          if (text === '') history.push('/');
          else history.push(`${text}/browse`);
        }}
      />
    </div>
  );
};

export default Search;
