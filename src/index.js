import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import FAQ from './pages/FAQ.js';
import { App } from './App';


const router = createBrowserRouter([
  {
    path:"/FAQ",
    element: <FAQ/>,
    },
    {
      path:"/",
      element: <App/>,
      }
      
    
      
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router= {router} />
  
);


reportWebVitals();