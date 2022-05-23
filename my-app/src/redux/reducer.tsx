import { GETDATA } from "./action";

const initstate={
    Products:[],
}
export const ProductReducer =(state=initstate,action:any)=>{ 
    switch (action.type) {
        case GETDATA:
          {state.Products=action.payload}
          
        default:
         {
             return state;
         }
      }
}