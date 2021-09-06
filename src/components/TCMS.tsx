import * as React from 'react';
import './TCMX.css'



function TCMX(props: any) {
  console.log("tcmx");
  console.log(props);
  return (



    <div className="TCMX-list">
      <h5>{props.item.str}</h5>
      <div className='mf-area'>

        <p>this area will be used to display required maintaince fecility diagram</p>
      </div>

      <div className="list-main">

      <div className="table-container">

<div className="row">

    <div className="cell">Table Utilisation Data(Hrs)<br/><b>12:54:23</b></div>

    <div className="cell">Total Wheel Count<br/><b>8</b></div>

    <div className="cell">Last Measurement Status<br/><b>Error</b></div>

    <div className="cell">Last Unit Passed<br/><b>3323</b></div>

</div>

<div className="row">

    <div className="cell">Last Measurement<br/><span><b>05/01/2021 09:20 AM</b></span></div>

    <div className="cell">Last Maintenance<br/><b>05/01/2021 09:20 AM</b></div>

    <div className="cell">Next Scheduled Maintenance<br/><b>05/01/2021 09:20 AM</b></div>

    <div className="cell">Availability Status<br/><b>On-line</b></div>



</div>

</div> 

</div> 



{/* 
        <table >

          <tr> <td><small>Total Utilisation Data(Hrs)</small> <br />
            12:54:23 </td>

            <td><small>Total Wheel Count</small> <br />8 </td>
            <td><small>Last Mesurent Status</small>  <br />error
            </td> <td><small>Last Unit Passsed</small>  <br />3233 </td>
          </tr>

          <tr> <td><small>Last Measurent</small> <br /> 05/01/2021 09:20</td> <td><small>Last Maintenance</small><br />05/01/2021 09:20 </td> <td><small> Next Scheduled Maintenance</small> <br />05/01/2021 09:20 </td> <td><small>Availability status</small><br /> On-line</td>    </tr>

        </table> */}


      </div>







  );
}


export default TCMX;


