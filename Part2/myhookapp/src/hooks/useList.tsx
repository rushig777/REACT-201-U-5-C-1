import { useState } from "react";

export const useList = (arr:number[]) => {

    const [list,setList]=useState<number[]>(arr)

    const push=(value:number)=> {

        setList([...list,value])
        return;
    }
    const pop =()=>{
       list.pop()
       setList(list);
    }
   const clear=()=>  {
       setList([])
       return;
   }
   const reset=()=>{
    setList(arr)
}
 const map=()=>{
     list.map((el:number,index: number, array: number[])=>{
         return el;
     })
    setList(list)
 }
    return [list, { push, pop, clear, reset, map }]
};
