import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Suspense } from "react";
import Menubar from './components/menubar';
import { Provider } from 'react-redux';

import { createStore ,applyMiddleware} from 'redux';
import { appstate } from './store/comibinereducer';
import thunk from 'redux-thunk';
import { alarmApi, chartApi, listApi, wheelcountApi } from './store/Action/getaction';


const mystore =createStore(appstate,applyMiddleware(thunk))

mystore.dispatch(listApi())
mystore.dispatch(alarmApi())
mystore.dispatch(chartApi())
mystore.dispatch(wheelcountApi())


// const AdminPage = React.lazy(() =>{
//   return new Promise(resolve=>setTimeout(resolve,5*100)).then(()=>
//     Math.floor(Math.random()*10)>=4
//     ?import("./App")
//     :Promise.reject(new Error("please load again "))
//   )
// });
ReactDOM.render(
  <Provider store={mystore}>
    <Menubar></Menubar>
    </Provider>,




  // <React.StrictMode>
    // {/* <Suspense fallback={<div className="lazy-load"> <h1>......loading</h1></div>}>

    // <AdminPage></AdminPage>

    // </Suspense> */}
    
    // <Menubar></Menubar>
   
    // {/* <App></App> */}
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
