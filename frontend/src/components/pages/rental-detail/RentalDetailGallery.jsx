import React, { useState } from 'react';

const RentalDetailGallery = ({ coverImage, images }) => {
  const [openPhoto, setOpenPhoto] = useState(false);
  const [currPhoto, setCurrPhoto] = useState('');

  const onCloseLightBox = (e) => {
    if (e.target.src) return;
    setOpenPhoto(false);
    setCurrPhoto('');
  };
  const onOpenLightBox = (img) => {
    setOpenPhoto(true);
    setCurrPhoto(img);
    window.innerWidth = '100vw';
  };

  return (
    <>
      <div className='rentalDetail__gallery'>
        <img
          src={coverImage}
          alt='main'
          className='rentalDetail__gallery-main'
          onClick={() => onOpenLightBox(coverImage)}
        />
        <div className='rentalDetail__gallery-images'>
          {images?.map((image, index) => (
            <img
              src={image}
              alt=''
              key={index}
              onClick={() => onOpenLightBox(image)}
            />
          ))}
        </div>
      </div>
      <div
        onClick={(e) => onCloseLightBox(e)}
        id='lightbox'
        className={`${openPhoto ? 'active' : ''}`}
      >
        <span onClick={(e) => onCloseLightBox(e)}>X</span>
        <img src={currPhoto} alt='' />
      </div>
    </>
  );
};

export default RentalDetailGallery;
