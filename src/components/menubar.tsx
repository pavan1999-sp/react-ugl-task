import React, { useEffect, useState } from 'react';
import { IStyleSet, Label, ILabelStyles, Pivot, PivotItem, Icon, Text, initializeIcons } from '@fluentui/react';
import './menubar.css'
import App from '../App';
import axios from 'axios';
import  myData  from './mydata';
import  {RdxHoc}  from '../store/reduxcomponents/rdxcomponent';

initializeIcons();

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { color: 'darkcayn' },
};


let _col = [

  { key: 'column1', name: 'Type', fieldName: 'Type', minWidth: 20, maxWidth: 20, isRowHeader: true, isResizable: false },
  { key: 'column2', name: 'Date', fieldName: 'Date', minWidth: 50, maxWidth: 50, isRowHeader: true, isResizable: true },
  { key: 'column3', name: 'No', fieldName: 'No', minWidth: 100, maxWidth: 100, isRowHeader: true, isResizable: true },
  { key: 'column4', name: 'Notification', fieldName: 'Notifiation', minWidth: 100, maxWidth: 100, isRowHeader: true, isResizable: true },
  { key: 'column5', name: 'Status', fieldName: 'status', minWidth: 60, maxWidth: 60, isRowHeader: true, isResizable: true },
  { key: 'column6', name: 'Priority', fieldName: 'priority', minWidth: 40, maxWidth: 40, isRowHeader: true, isResizable: true }
];
let _columns = [
  { key: 'column8', name: 'Date&time', fieldName: 'Date&Time', minWidth: 20, maxWidth: 40, isRowHeader: true, isResizable: true },
  { key: 'column9', name: 'code', fieldName: 'AlarmCode', minWidth: 100, maxWidth: 50, isRowHeader: true, isResizable: true },
  { key: 'column10', name: 'Description', fieldName: 'DeScription', minWidth: 100, maxWidth: 200, isRowHeader: true, isResizable: true },
  { key: 'column11', name: 'state', fieldName: 'Alaramstate', minWidth: 100, maxWidth: 10, isRowHeader: true, isResizable: true }

];

function Menubar() {
 



  // async function for Alarm history
  async function Alarmdata() {
    let response = await axios.get("http://localhost:3200/alaram")
    console.log(response)
    AlarmList = response.data.map((x: any) => {
      return x
    })
    setAlarmdata(AlarmList)
  }
  useEffect(() => {
    Alarmdata();
  }, [])
  let [AlarmList, setAlarmdata] = useState([]);

  // async function for Maintenance history

  async function LoadData() {
    let response = await axios.get("http://localhost:3200/MaintenanceHistory")
    console.log(response)
    DetailsLisItem = response.data.map((x: any) => {
      return x
    })
    setTdata(DetailsLisItem)
  }

  useEffect(() => {
    LoadData();
  }, [])

  let [DetailsLisItem, setTdata] = useState([]);
  // async function for weighbridge

  async function weighbridgeData() {
    let response = await axios.get(" http://localhost:3200/weighbridge")
    console.log(response)
    weighbridgeItem = response.data.map((x: any) => {
      return x
    })
    bridgeData(weighbridgeItem)
  }

  useEffect(() => {
    weighbridgeData();
  }, [])

  let [weighbridgeItem, bridgeData] = useState([]);

  // async function for Maintenance UFWL

  async function UFWLData() {
    let response = await axios.get("http://localhost:3200/UFWL")
    console.log(response)
    UFWLItem = response.data.map((x: any) => {
      return x
    })
    setUFWLdata(UFWLItem)
  }

  useEffect(() => {
    UFWLData();
  }, [])

  let [UFWLItem, setUFWLdata] = useState([]);


  // async function for chart

  async function chartData() {
    let response = await axios.get(" http://localhost:3400/utilization")
    console.log(response)
    chartItem = response.data.map((x: any) => {
      return x
    })
    setchartItem(chartItem)
  }

  useEffect(() => {
    chartData();
  }, [])

  let [chartItem, setchartItem] = useState([]);

  // async function for chart

  async function wheelCount() {
    let response = await axios.get("http://localhost:3400/wheelcount")
    console.log(response)
    wheelCountItem = response.data.map((x: any) => {
      return x
    })
    setwheelCountItem(wheelCountItem)
  }

  useEffect(() => {
    wheelCount();
  }, [])

  let [wheelCountItem, setwheelCountItem] = useState([]);





  // async function for chart

  async function twpData() {
    let response = await axios.get("http://localhost:3500/utilization")
    console.log(response)
    twpItem = response.data.map((x: any) => {
      return x
    })
    settwpItem(twpItem)
  }

  useEffect(() => {
    twpData();
  }, [])

  let [twpItem, settwpItem] = useState([]);

  // async function for chart

  async function twpwheelCount() {
    let response = await axios.get("http://localhost:3500/wheelcount")
    console.log(response)
    twpwheelItem = response.data.map((x: any) => {
      return x
    })
    settwpwheelItem(twpwheelItem)
  }

  useEffect(() => {
    twpwheelCount();
  }, [])

  let [twpwheelItem, settwpwheelItem] = useState([]);







  let data = {
    items: DetailsLisItem,
    clm: _col,
    str:'maintenance history'
  }
  let dat = {
    items: AlarmList,
    clm: _columns,
    str:'alarm history'
  }

  let bridge = {
    items: weighbridgeItem,
    clm: _col,
    str:'maintenance history'

  }
  let UFWL = {
    items: UFWLItem,
    clm: _col

  }
  let chart = {
    uz: chartItem,
    wc: wheelCountItem
  }

  let twp = {
    uz: twpItem,
    wc: twpwheelItem
  }

let lastcomunication='lastcommunication'


  return (
    <div className="menu-bar">

      <h3>Maintenance Facility <span><Icon iconName="Upload" className="upload" /></span></h3> 
      {/* <p id="lc"><Icon iconName="Cloud" className="icon2" />lastlocation:25/01/20202 9:50pm<Icon iconName="Refresh" className="icon3" /></p> */}
  <div className="cc" >  
  <p id="location"><Icon iconName="Cloud" className="cloud" />lastlocation:26/01/2021 9:50pm  <Icon iconName="Refresh" className="refresh" /> </p>

      <Pivot aria-label="Basic Pivot Example"     >
 
     
      
        


        <PivotItem className="menu-bar"
          headerText="TCMS"

          headerButtonProps={{
            'data-order': 1,
            'data-title': 'My Files Title'


          }}

        // height: selectedKey === 'squareRed' ? 100 : 200,
        // background: selectedKey === 'rectangleGreen' ? 'green' : 'red',

        >
          <Label >

            <App item={data} dt={dat} str="TCMS" chartone={chart}></App>
          </Label>
        </PivotItem>

        <PivotItem headerText="weighbridge" className="pivot-item">
          <Label styles={labelStyles}>

            <App item={bridge} dt={dat} str="weighbridge" chartone={chart}></App>
          </Label>
        </PivotItem>
        <PivotItem headerText="UFWL" className="pivot-item">
          <Label styles={labelStyles}>
            <App item={UFWL} dt={dat} str="UFWL" chartone={chart}></App>
          </Label>

        </PivotItem>
        <PivotItem headerText="TWP">
          <Label styles={labelStyles}>

            <App item={data} dt={dat} str="TWP" chartone={twp} ></App>
          </Label>
          
        </PivotItem>
        
        <PivotItem headerText="REDUX">
        <Label styles={labelStyles}>
<RdxHoc></RdxHoc>
</Label>
        </PivotItem>
      
        
        
      </Pivot>
      
      </div>
    </div>
  );
}

export default Menubar;