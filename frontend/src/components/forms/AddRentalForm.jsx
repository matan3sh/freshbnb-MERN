import React from 'react';
import { useForm } from 'react-hook-form';

import { Button } from 'components/app';
import {
  LocalAtmIcon,
  LocationCityIcon,
  StreetviewIcon,
  ImageIcon,
  BurstModeIcon,
} from 'components/icons';

const AddRentalForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='inputs'>
        <div className='input'>
          <input
            ref={register}
            type='text'
            name='title'
            id='title'
            placeholder='Name'
          />
        </div>
        <div className='input'>
          <select
            ref={register}
            name='category'
            id='category'
            placeholder='Category'
          >
            <option selected disabled defaultValue>
              Choose Category
            </option>
            <option value='apartment'>Apartment</option>
            <option value='condo'>Condo</option>
            <option value='apartment'>House</option>
          </select>
        </div>
        <div className='input icon-input'>
          <input
            ref={register}
            type='text'
            name='city'
            id='city'
            placeholder='City'
          />
          <LocationCityIcon />
        </div>
        <div className='input icon-input'>
          <input
            ref={register}
            type='text'
            name='street'
            id='street'
            placeholder='Street'
          />
          <StreetviewIcon />
        </div>
        <div className='input'>
          <input
            ref={register}
            type='text'
            name='numOfRooms'
            id='numOfRooms'
            placeholder='Number of Rooms'
          />
        </div>
        <div className='input'>
          <textarea
            ref={register}
            rows='8'
            type='text'
            name='description'
            id='description'
            placeholder='Description'
          />
        </div>
        <div className='input'>
          <select ref={register} name='shared' id='shared' placeholder='Shared'>
            <option disabled defaultValue selected>
              Shared Rental?
            </option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        <div className='input icon-input'>
          <input
            ref={register}
            type='text'
            name='image'
            id='image'
            placeholder='Cover Image URL'
          />
          <ImageIcon />
        </div>
        <div className='input icon-input'>
          <input
            ref={register}
            type='text'
            name='image1'
            id='image1'
            placeholder='Image-1 URL'
          />
          <BurstModeIcon />
        </div>
        <div className='input icon-input'>
          <input
            ref={register}
            type='text'
            name='image2'
            id='image2'
            placeholder='Image-2 URL'
          />
          <BurstModeIcon />
        </div>
        <div className='input icon-input'>
          <input
            ref={register}
            type='text'
            name='image3'
            id='image3'
            placeholder='Image-3 URL'
          />
          <BurstModeIcon />
        </div>
        <div className='input icon-input'>
          <input
            ref={register}
            type='text'
            name='image4'
            id='image4'
            placeholder='Image-4 URL'
          />
          <BurstModeIcon />
        </div>
        <div className='input icon-input'>
          <input
            ref={register}
            type='number'
            min='0'
            name='dailyPrice'
            id='dailyPrice'
            placeholder='Daily Price'
          />
          <LocalAtmIcon />
        </div>
      </div>
      <Button type='submit' text='Add' />
    </form>
  );
};

export default AddRentalForm;
