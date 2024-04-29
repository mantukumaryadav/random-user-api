import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const UserCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUser(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      {user && <Card user={user} />}
    </div>
  );
};

export default UserCard;
