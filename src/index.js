import React from 'react';
import ReactDOM from 'react-dom';
import App from './Login';
 
// https://pro-self-studier.tistory.com/19
const title = 'hello WOrld!! git React Webpack Babel Setup!!!!!!!!!!!!!!!';
 
ReactDOM.render(
  <Login/>,
  document.getElementById('root')
); 

module.hot.accept();