import React from 'react';
import ReactDOM from 'react-dom';
 
// https://pro-self-studier.tistory.com/19
const title = 'wed23ad343434s React Webpack Babel Setup';
 
ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('root')
); 

module.hot.accept();