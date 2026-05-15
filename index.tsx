import React from 'react';
import ReactDOM from 'react-dom';
import ServiceCard from './ServiceCard';

const services: { id: number; name: string; description: string }[] = [
  { id: 1, name: 'Service 1', description: 'This is service 1' },
  { id: 2, name: 'Service 2', description: 'This is service 2' },
  { id: 3, name: 'Service 3', description: 'This is service 3' },
];

const App: React.FC = () => {
  return (
    <div>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);