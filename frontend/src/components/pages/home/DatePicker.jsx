import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { PeopleIcon } from 'components/icons';
import { Button } from '@material-ui/core';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DatePicker = () => {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    console.log(startDate, endDate);
  };

  return (
    <div className='datePicker'>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <div className='datePicker__container'>
        <h2>
          Number of guests
          <PeopleIcon />
        </h2>
        <input min={0} defaultValue={2} type='number' />
        <Button onClick={() => history.push('/search')}>Search</Button>
      </div>
    </div>
  );
};

export default DatePicker;
