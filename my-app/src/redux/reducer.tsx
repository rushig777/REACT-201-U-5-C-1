import { GETDATA } from "./action";

const initstate={
    Products:[],
}
export const ProductReducer =(state=initstate,action:any)=>{ 
    switch (action.type) {
        
        default:
         {
             return state=action.payload;
         }
      }
}