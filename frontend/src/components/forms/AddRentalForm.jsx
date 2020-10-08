import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { FileLoader } from 'components/file-upload';
import { Button } from 'components/app';
import {
  LocalAtmIcon,
  LocationCityIcon,
  StreetviewIcon,
  BurstModeIcon,
} from 'components/icons';

const Error = ({ children }) => (
  <div className='input__notValid'>{children}</div>
);

const AddRentalForm = ({ onSubmit }) => {
  const { register, handleSubmit, errors, setValue } = useForm();

  useEffect(() => {
    register({ name: 'image' });
  }, [register]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='inputs'>
        <div className='input'>
          <input
            ref={register({
              required: 'Title is Required',
              maxLength: {
                value: 128,
                message: 'Title must be 128 characters maximum',
              },
            })}
            type='text'
            name='title'
            id='title'
            placeholder='Name'
          />
          <ErrorMessage as={<Error />} errors={errors} name='title'>
            {({ message }) => <p>{message}</p>}
          </ErrorMessage>
        </div>
        <div className='input'>
          <select
            ref={register({
              required: 'Category is Required',
            })}
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
          <ErrorMessage as={<Error />} errors={errors} name='category'>
            {({ message }) => <p>{message}</p>}
          </ErrorMessage>
        </div>
        <div className='input'>
          <div className='icon-input'>
            <input
              ref={register({
                required: 'City is Required',
              })}
              type='text'
              name='city'
              id='city'
              placeholder='City'
            />
            <LocationCityIcon />
          </div>
          <ErrorMessage as={<Error />} errors={errors} name='city'>
            {({ message }) => <p>{message}</p>}
          </ErrorMessage>
        </div>
        <div className='input'>
          <div className='icon-input'>
            <input
              ref={register({
                required: 'Street is Required',
                minLength: {
                  value: 4,
                  message: 'Street must 4 characters minimum',
                },
              })}
              type='text'
              name='street'
              id='street'
              placeholder='Street'
            />
            <StreetviewIcon />
          </div>
          <ErrorMessage as={<Error />} errors={errors} name='street'>
            {({ message }) => <p>{message}</p>}
          </ErrorMessage>
        </div>
        <div className='input'>
          <input
            ref={register({
              required: 'Number of Rooms is Required',
            })}
            type='number'
            name='numOfRooms'
            id='numOfRooms'
            placeholder='Number of Rooms'
          />
          <ErrorMessage as={<Error />} errors={errors} name='numOfRooms'>
            {({ message }) => <p>{message}</p>}
          </ErrorMessage>
        </div>
        <div className='input'>
          <textarea
            ref={register({
              required: 'Description is Required',
            })}
            rows='8'
            type='text'
            name='description'
            id='description'
            placeholder='Description'
          />
          <ErrorMessage as={<Error />} errors={errors} name='description'>
            {({ message }) => <p>{message}</p>}
          </ErrorMessage>
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
        <FileLoader onFileUpload={(imageId) => setValue('image', imageId)} />
        <div className='input '>
          <div className='icon-input'>
            <input
              ref={register({
                required: 'Image is Required',
              })}
              type='text'
              name='image1'
              id='image1'
              placeholder='Image-1 URL'
            />
            <BurstModeIcon />
          </div>
          <ErrorMessage as={<Error />} errors={errors} name='image1'>
            {({ message }) => <p>{message}</p>}
          </ErrorMessage>
        </div>
        <div className='input'>
          <div className='icon-input'>
            <input
              ref={register({
                required: 'Image is Required',
              })}
              type='text'
              name='image2'
              id='image2'
              placeholder='Image-2 URL'
            />
            <BurstModeIcon />
          </div>
          <ErrorMessage as={<Error />} errors={errors} name='image2'>
            {({ message }) => <p>{message}</p>}
          </ErrorMessage>
        </div>
        <div className='input'>
          <div className='icon-input'>
            <input
              ref={register({
                required: 'Image is Required',
              })}
              type='text'
              name='image3'
              id='image3'
              placeholder='Image-3 URL'
            />
            <BurstModeIcon />
          </div>
          <ErrorMessage as={<Error />} errors={errors} name='image3'>
            {({ message }) => <p>{message}</p>}
          </ErrorMessage>
        </div>
        <div className='input '>
          <div className='icon-input'>
            <input
              ref={register({
                required: 'Image is Required',
              })}
              type='text'
              name='image4'
              id='image4'
              placeholder='Image-4 URL'
            />
            <BurstModeIcon />
          </div>
          <ErrorMessage as={<Error />} errors={errors} name='image4'>
            {({ message }) => <p>{message}</p>}
          </ErrorMessage>
        </div>
        <div className='input '>
          <div className='icon-input'>
            <input
              ref={register({
                required: 'Daily Price is Required',
              })}
              type='number'
              min='0'
              name='dailyPrice'
              id='dailyPrice'
              placeholder='Daily Price'
            />
            <LocalAtmIcon />
          </div>
          <ErrorMessage as={<Error />} errors={errors} name='dailyPrice'>
            {({ message }) => <p>{message}</p>}
          </ErrorMessage>
        </div>
      </div>
      <Button type='submit' text='Add' />
    </form>
  );
};

export default AddRentalForm;
