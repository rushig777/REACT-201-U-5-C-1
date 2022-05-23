import axios from "axios"

 export const GETDATA ="GETDATA"

export const getData = async (dispatch:any)=>{

   const res=await axios.get("http://localhost:8080/products");
   const data =await res.data;
   dispatch({
       type:GETDATA,
       payload:data
   })

}