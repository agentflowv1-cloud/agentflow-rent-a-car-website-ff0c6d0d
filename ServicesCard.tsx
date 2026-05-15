import React from 'react';
import './ServicesCard.css';

interface ServicesCardProps {
  title: string;
  description: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ title, description }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md p-4 my-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
    </div>
  );
};

export default ServicesCard;