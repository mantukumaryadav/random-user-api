import React from 'react';

const Card = ({ user }) => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-md overflow-hidden p-6">
      <div className="flex justify-center items-center mb-6">
        <img src={user.picture.large} alt="User" className="w-32 h-32 rounded object-cover mr-6" />
        <div>
          <div className="font-bold text-xl mb-2">{`${user.name.first} ${user.name.last}`}</div>
          <p className="text-gray-700 text-base">{user.email}</p>
          <p className="text-gray-700 text-base">{user.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
