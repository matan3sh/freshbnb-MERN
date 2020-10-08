import React, { useState } from 'react';
import { FileLoader } from 'components/file-upload';

import { Button } from 'components/app';
import {
  LocalAtmIcon,
  LocationCityIcon,
  StreetviewIcon,
  BurstModeIcon,
} from 'components/icons';

const UpdateRentalForm = ({ onSubmit, rentalToUpdate }) => {
  const [rental, setRental] = useState({
    title: rentalToUpdate?.title,
    category: rentalToUpdate?.category,
    city: rentalToUpdate?.city,
    street: rentalToUpdate?.street,
    numOfRooms: rentalToUpdate?.numOfRooms,
    description: rentalToUpdate?.description,
    shared: rentalToUpdate?.shared,
    image: rentalToUpdate?.image,
    images: [...rentalToUpdate?.images],
    dailyPrice: rentalToUpdate?.dailyPrice,
  });

  return (
    <form onSubmit={(e) => onSubmit(e, rental)}>
      <div className='inputs'>
        <div className='input'>
          <input
            type='text'
            name='title'
            value={rental.title}
            onChange={(e) => setRental({ ...rental, title: e.target.value })}
            placeholder='Name'
          />
        </div>
        <div className='input'>
          <select
            name='category'
            onChange={(e) => setRental({ ...rental, category: e.target.value })}
            placeholder='Category'
            value={rental.category}
          >
            <option selected disabled>
              Choose Category
            </option>
            <option value='apartment'>Apartment</option>
            <option value='condo'>Condo</option>
            <option value='apartment'>House</option>
          </select>
        </div>
        <div className='input'>
          <div className='icon-input'>
            <input
              type='text'
              name='city'
              value={rental.city}
              onChange={(e) => setRental({ ...rental, city: e.target.value })}
              placeholder='City'
            />
            <LocationCityIcon />
          </div>
        </div>
        <div className='input'>
          <div className='icon-input'>
            <input
              type='text'
              name='street'
              value={rental.street}
              onChange={(e) => setRental({ ...rental, street: e.target.value })}
              placeholder='Street'
            />
            <StreetviewIcon />
          </div>
        </div>
        <div className='input'>
          <input
            type='number'
            name='numOfRooms'
            value={rental.numOfRooms}
            onChange={(e) =>
              setRental({ ...rental, numOfRooms: parseInt(e.target.value) })
            }
            placeholder='Number of Rooms'
          />
        </div>
        <div className='input'>
          <textarea
            rows='8'
            type='text'
            name='description'
            value={rental.description}
            onChange={(e) =>
              setRental({ ...rental, description: e.target.value })
            }
            placeholder='Description'
          />
        </div>
        <div className='input'>
          <select
            name='shared'
            onChange={(e) => setRental({ ...rental, shared: e.target.value })}
            placeholder='Shared'
            value={rental.shared}
          >
            <option disabled selected>
              Shared Rental?
            </option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        <FileLoader
          onFileUpload={(imageId) => setRental({ ...rental, image: imageId })}
        />
        <div className='input '>
          <div className='icon-input'>
            <input
              type='text'
              name='image1'
              value={rental.images[0]}
              onChange={(e) => setRental({ ...rental, image1: e.target.value })}
              placeholder='Image-1 URL'
            />
            <BurstModeIcon />
          </div>
        </div>
        <div className='input'>
          <div className='icon-input'>
            <input
              type='text'
              name='image2'
              value={rental.images[1]}
              onChange={(e) => setRental({ ...rental, image2: e.target.value })}
              placeholder='Image-2 URL'
            />
            <BurstModeIcon />
          </div>
        </div>
        <div className='input'>
          <div className='icon-input'>
            <input
              type='text'
              name='image3'
              value={rental.images[2]}
              onChange={(e) => setRental({ ...rental, image3: e.target.value })}
              placeholder='Image-3 URL'
            />
            <BurstModeIcon />
          </div>
        </div>
        <div className='input '>
          <div className='icon-input'>
            <input
              type='text'
              name='image4'
              value={rental.images[3]}
              onChange={(e) => setRental({ ...rental, image4: e.target.value })}
              placeholder='Image-4 URL'
            />
            <BurstModeIcon />
          </div>
        </div>
        <div className='input '>
          <div className='icon-input'>
            <input
              type='number'
              min='0'
              name='dailyPrice'
              value={rental.dailyPrice}
              onChange={(e) =>
                setRental({ ...rental, dailyPrice: parseInt(e.target.value) })
              }
              placeholder='Daily Price'
            />
            <LocalAtmIcon />
          </div>
        </div>
      </div>
      <Button type='submit' text='Update' />
    </form>
  );
};

export default UpdateRentalForm;
