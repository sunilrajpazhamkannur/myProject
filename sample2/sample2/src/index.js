import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MyFun from './myfile';
import UseEffectFile from './UseEffectFile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
   <MyFun/>
   <UseEffectFile/>
  </React.StrictMode>
);

