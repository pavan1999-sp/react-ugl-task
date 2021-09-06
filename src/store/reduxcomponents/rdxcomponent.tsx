import { connect } from "react-redux";
import App from "../../App";
import Menubar from "../../components/menubar";
import myData from "../../components/mydata";

export const RdxHoc= connect((store:any)=>{
    return {res:store.reduxdata.count,
          alaram:store.alaramreduxdata.alaram, 
          uz:store.chartdata.uz,
          wc:store.wheelcount.wc
         }
},null)(myData)