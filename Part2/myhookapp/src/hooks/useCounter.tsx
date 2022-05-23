import { useState } from "react";

export const useCounter = (init:number) => {
    const [value, set]=useState(init)

    const inc= (input:number)=>{
        set(value+input);
    }
    const dec= (input:number)=>{
        set(value-input);
    }
    return{value,inc,dec,set}
};
