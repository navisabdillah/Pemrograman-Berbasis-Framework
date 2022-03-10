import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import HelloComponent from './HelloComponent';
import Login from './Login';
import Navis from './Navis';

// function HelloComponent () {
//   return HelloComponent
// }
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// function HelloComponent () {
//   return HelloComponent
// }

//ReactDOM.render(
 // <React.StrictMode>
    //<App />
  //</React.StrictMode>,
  //document.getElementById('root')
//);

//class StateFullComponent extends React.Component{
//render(){
 //return <p>StateFullComponent</p>
//}
//}

ReactDOM.render(<StateFullComponent/>, document.getElementById('root'));
//ReactDOM.render(<Login/>, document.getElementById('root'));
//ReactDOM.render(<Navis/>, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
