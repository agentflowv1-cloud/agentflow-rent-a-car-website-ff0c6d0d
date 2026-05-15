import React from 'react';
import ReactDOM from 'react-dom';
import ServicesCard from './ServicesCard';

const App = () => {
  return (
    <div>
      <ServicesCard title="Our Services" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex." />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);