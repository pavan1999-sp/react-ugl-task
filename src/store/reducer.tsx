
export const firstReducer=(state={count:{}},action:any)=>{

switch(action.type){
    case "REDUX_DATA":
        return {count:action.records}
  
            
        default :
        return state;
}

}
export const alaramlistReducer=(state={alaram:{}},action:any)=>{

    switch(action.type){
       
            case "REDUX_ALARMDATA":
                return {alaram:action.alaram}
                
            default :
            return state;
    }
    
    }
    export const chartReducer=(state={uz:[]},action:any)=>{

        switch(action.type){
            case "REDUX_CHARTDATA":
                return {uz:action.chart}
          
                    
                default :
                return state;
        }
        
        }
        export const wheelcountReducer=(state={wc:[]},action:any)=>{

            switch(action.type){
                case "REDUX_WHEELCOUNT":
                    return {wc:action.wheel}
              
                        
                    default :
                    return state;
            }
            
            }
        

