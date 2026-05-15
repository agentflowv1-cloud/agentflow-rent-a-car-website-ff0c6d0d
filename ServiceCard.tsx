import React from 'react';
import { useState } from 'react';
import './ServiceCard.css';

interface Service {
  id: number;
  name: string;
  description: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`service-card ${isHovered ? 'hovered' : ''} ${isSelected ? 'selected' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <h2 className="service-name">{service.name}</h2>
      {isHovered || isSelected ? (
        <p className="service-description">{service.description}</p>
      ) : null}
    </div>
  );
};

export default ServiceCard;