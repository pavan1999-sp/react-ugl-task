import React, { useEffect, useState } from 'react';
import './App.css';
import OurChart from './components/Highcharts';
import Menubar from './components/menubar';
import DetailsListtask from './components/mhistory';
import axios from 'axios';
import TCMX from './components/TCMS';



function App(pr:any) {
  console.log(pr)
  
  
  return (

    <div className="App">
      <hr />
      <div className="menu-bar">
       

        <div className="ms-Grid" dir="ltr">

          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6" > 


            <TCMX item={pr} ></TCMX>  
            </div>
            <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6">
              <OurChart chart={pr.chartone} ></OurChart> 
              </div>
          </div>

          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6" id="list" >
              
                <DetailsListtask   item={pr.item}   ></DetailsListtask > 
                 </div>
            <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6"  id="list"> 
             <DetailsListtask   item={pr.dt}  ></DetailsListtask>  
             </div>
              </div>

        </div>


      </div>


    </div>
  );

}

export default App;
