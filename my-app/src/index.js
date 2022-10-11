import React from 'react'
import  ReactDOM  from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from './Counter'
import Button from './Button'
// import APIButton from './APIButton';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Counter />
    <Button className="testing" />
    {/* <APIButton /> */}
  </React.StrictMode>
);

