import axios from "axios";
export const getapisAction=(data:any)=>{
    return {
        type:"REDUX_DATA",
        records:data
    }
}
export const alarmapisAction=(data:any)=>{
    return {
        type:"REDUX_ALARMDATA",
        alaram:data
    }
}

export const chartpisAction=(data:any)=>{
    return {
        type:"REDUX_CHARTDATA",
        chart:data,
        
    }
}
export const wheelcountAction=(data:any)=>{
    return {
        type:"REDUX_WHEELCOUNT",
        wheel:data,
        
    }
}
// ________________
export const listApi= ()=>{
    return async (dispatch:any)=>{ 
        try{

let response = await axios.get("http://localhost:3200/MaintenanceHistory")
console.log("action resoposne")
console.log(response.data)

dispatch(getapisAction(response.data));
    }
    catch(e){
        dispatch(getapisAction({}));


    }
}
}
////alaram list api 

export const alarmApi= ()=>{
    return async (dispatch:any)=>{ 
        try{

let response = await axios.get("http://localhost:3200/alaram")
console.log("alaram resoposne")
console.log(response.data)

dispatch(alarmapisAction(response.data));
    }
    catch(e){
        dispatch(alarmapisAction({}));


    }
}
}

////chart api 

export const chartApi= ()=>{
    return async (dispatch:any)=>{ 
        try{

let response = await axios.get("http://localhost:3400/utilization")
console.log("alaram resoposne")
console.log(response.data)

dispatch(chartpisAction(response.data));
    }
    catch(e){
        dispatch(chartpisAction([]));


    }
}
}

export const wheelcountApi= ()=>{
    return async (dispatch:any)=>{ 
        try{

let response = await axios.get("http://localhost:3400/wheelcount")
console.log("alaram resoposne")
console.log(response.data)

dispatch(wheelcountAction(response.data));
    }
    catch(e){
        dispatch(wheelcountAction([]));


    }
}
}

