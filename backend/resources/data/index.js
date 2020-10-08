const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();

const image1Id = mongoose.Types.ObjectId();
const image2Id = mongoose.Types.ObjectId();
const image3Id = mongoose.Types.ObjectId();
const image4Id = mongoose.Types.ObjectId();

exports.images = [
  {
    _id: image1Id,
    cloudinaryId: 'norbert-levajsics-oTJ92KUXHls-unsplash',
    url:
      'https://res.cloudinary.com/dwymjj6rm/image/upload/v1602148577/norbert-levajsics-oTJ92KUXHls-unsplash.jpg',
  },
  {
    _id: image2Id,
    cloudinaryId: 'deborah-cortelazzi-gREquCUXQLI-unsplash',
    url:
      'https://res.cloudinary.com/dwymjj6rm/image/upload/v1602148577/deborah-cortelazzi-gREquCUXQLI-unsplash.jpg',
  },
  {
    _id: image3Id,
    cloudinaryId: 'patrick-perkins-3wylDrjxH-E-unsplash',
    url:
      'https://res.cloudinary.com/dwymjj6rm/image/upload/v1602148577/patrick-perkins-3wylDrjxH-E-unsplash.jpg',
  },
  {
    _id: image4Id,
    cloudinaryId: 'gn6czsxbn8ua9atacrc7',
    url:
      'https://res.cloudinary.com/dwymjj6rm/image/upload/v1602163876/gn6czsxbn8ua9atacrc7.jpg',
  },
];

exports.users = [
  {
    _id: user1Id,
    username: 'Test User',
    email: 'test@gmail.com',
    password: 'testtest',
  },
  {
    _id: user2Id,
    username: 'matan3sh',
    email: 'matan3sh@gmail.com',
    password: '123456',
  },
];

exports.rentals = [
  {
    images: [
      'https://a0.muscache.com/im/pictures/dcd13ab1-0f7c-4022-8b39-ad6b9588f4d1.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/07999385-e7dc-42fe-a8ef-635de84bfda9.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/f6486ee0-9c0a-4082-8de1-923f4e9b4fb5.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/7fd70c08-294b-4f55-8a8d-c806a8a673a2.jpg?im_w=720',
    ],
    star: 2.1,
    title: 'At the Times Square',
    city: 'new york',
    street: '5th avenue',
    category: 'apartment',
    image: image1Id,
    numOfRooms: 1,
    shared: false,
    description: 'Very nice apartment in center of the city of new york.',
    dailyPrice: 94,
    owner: user2Id,
  },
  {
    images: [
      'https://a0.muscache.com/im/pictures/dcd13ab1-0f7c-4022-8b39-ad6b9588f4d1.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/07999385-e7dc-42fe-a8ef-635de84bfda9.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/f6486ee0-9c0a-4082-8de1-923f4e9b4fb5.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/7fd70c08-294b-4f55-8a8d-c806a8a673a2.jpg?im_w=720',
    ],
    star: 4.1,
    title: 'Nice view on gloden gate',
    city: 'san francisco',
    street: 'collison',
    category: 'condo',
    image: image2Id,
    numOfRooms: 2,
    shared: true,
    description: 'Very nice condo new the golden gate',
    dailyPrice: 105,
    owner: user1Id,
  },
  {
    images: [
      'https://a0.muscache.com/im/pictures/dcd13ab1-0f7c-4022-8b39-ad6b9588f4d1.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/07999385-e7dc-42fe-a8ef-635de84bfda9.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/f6486ee0-9c0a-4082-8de1-923f4e9b4fb5.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/7fd70c08-294b-4f55-8a8d-c806a8a673a2.jpg?im_w=720',
    ],
    star: 3.8,
    title: 'Eiffel tower view',
    city: 'paris',
    street: 'Jackson street',
    category: 'apartment',
    image: image3Id,
    numOfRooms: 3,
    shared: true,
    description: 'Greate apartment in center of paris',
    dailyPrice: 75,
    owner: user2Id,
  },
  {
    images: [
      'https://images.unsplash.com/photo-1529408686214-b48b8532f72c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1594226593006-cac2d29d1adf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
      'https://images.unsplash.com/photo-1529408632839-a54952c491e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1541971875076-8f970d573be6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
    ],
    star: 4.8,
    title: 'Beautiful Berlin',
    city: 'berlin',
    street: 'main street',
    category: 'condo',
    image: image4Id,
    numOfRooms: 5,
    shared: false,
    description: 'Very big apartment in the main street of berlin, germany.',
    dailyPrice: 130,
    owner: user2Id,
  },
];
