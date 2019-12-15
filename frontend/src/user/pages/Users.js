import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Istvan Acs',
      image:
        'https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
      places: 4
    }
  ];
  return <UsersList items={USERS} />;
};

export default Users;
