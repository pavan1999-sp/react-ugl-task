import { DetailsList } from "@fluentui/react";
import React from "react";
import App from "../App";
import OurChart from "./Highcharts";
import DetailsListtask from "./mhistory";
import TCMX from "./TCMS";


let _col = [

    { key: 'column1', name: 'Type', fieldName: 'Type', minWidth: 20, maxWidth: 20, isRowHeader: true, isResizable: false },
    { key: 'column2', name: 'Date', fieldName: 'Date', minWidth: 50, maxWidth: 100, isRowHeader: true, isResizable: true },
    { key: 'column3', name: 'No', fieldName: 'No', minWidth: 100, maxWidth: 100, isRowHeader: true, isResizable: true },
    { key: 'column4', name: 'Notification', fieldName: 'Notifiation', minWidth: 100, maxWidth: 300, isRowHeader: true, isResizable: true },
    { key: 'column5', name: 'Status', fieldName: 'status', minWidth: 60, maxWidth: 60, isRowHeader: true, isResizable: true },
    { key: 'column6', name: 'Priority', fieldName: 'priority', minWidth: 40, maxWidth: 40, isRowHeader: true, isResizable: true }
  ];
  let _columns = [
    { key: 'column8', name: 'Date&time', fieldName: 'Date&Time', minWidth: 20, maxWidth: 40, isRowHeader: true, isResizable: true },
    { key: 'column9', name: 'code', fieldName: 'AlarmCode', minWidth: 100, maxWidth: 50, isRowHeader: true, isResizable: true },
    { key: 'column10', name: 'Description', fieldName: 'DeScription', minWidth: 100, maxWidth: 200, isRowHeader: true, isResizable: true },
    { key: 'column11', name: 'state', fieldName: 'Alaramstate', minWidth: 100, maxWidth: 10, isRowHeader: true, isResizable: true }
  
  ];


 function myData(reduxdata:any){
    console.log("redux_data");
    console.log(reduxdata);


    let data = {
        items: reduxdata.res,
        clm: _col,
        str:'maintenance history'
      }
      let dat = {
        items:  reduxdata.alaram,
        clm: _columns,
        str:'alarm history'
      }
    
      let bridge = {
        items: reduxdata,
        clm: _col,
        str:'maintenance history'
    
      }
      let UFWL = {
        items:  reduxdata,
        clm: _col
    
      }
      let chart = {
        uz:  reduxdata.uz,
        wc: reduxdata.wc
      }
      let tcmx={
          str:"redux"
      }
    
     
    
    
return (
    <div className="r-class">
       <div className="menu-bar">
       

       <div className="ms-Grid" dir="ltr">

         <div className="ms-Grid-row">
           <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6" > 


           <TCMX item={tcmx} ></TCMX>  
           </div>
           <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6">
             <OurChart chart={chart} ></OurChart> 
             </div>
         </div>

         <div className="ms-Grid-row">
           <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6" id="list" >
             
               <DetailsListtask   item={data}   ></DetailsListtask > 
                </div>
           <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6"  id="list"> 
            <DetailsListtask   item={dat}  ></DetailsListtask>  
            </div>
             </div>

       </div>


     </div>

        
    </div>
)
}
export default myData;