import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { Lesson1, Lesson2, Lesson3 } from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); 
/*
creates a react-root/DOM element. DOM stands for "Document Object Model" which is a 
programming interface that allows us to create/change/remove elements from the DOM.

In this case we are grabbing the <div id="root"></div> element in index.html as our root DOM container which
allows us to display/render React components inside this DOM browser as shown below:
*/

root.render(
  <React.StrictMode>
    <Lesson1 /> { /* renders Lesson1 function into the HTML file "root" */ }
    <Lesson2 />
    <Lesson3 />
  </React.StrictMode>
);