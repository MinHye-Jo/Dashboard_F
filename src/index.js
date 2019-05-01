import React from 'react';
import ReactDOM from 'react-dom';
 
// https://pro-self-studier.tistory.com/19
const title = 'hello WOrld!! git React Webpack Babel Setup!!!!!!!!!!!!!!!';
 
ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('root')
); 

module.hot.accept();