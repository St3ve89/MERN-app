import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://images.pexels.com/photos/2568906/pexels-photo-2568906.png?auto=compress&cs=tinysrgb&h=750&w=1260',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484445,
      lng: -73.9878531
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Emp. State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://images.pexels.com/photos/2568906/pexels-photo-2568906.png?auto=compress&cs=tinysrgb&h=750&w=1260',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484445,
      lng: -73.9878531
    },
    creator: 'u2'
  }
];

const UserPlaces = () => {
  const userId = useParams().uid;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
