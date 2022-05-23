import { Card } from "./Card";
import{useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/action";
function Body() {
 
       
        const dispatch = useDispatch<any>();

  useEffect(() => {
  
    getData(dispatch)
  }, [])
  return (
    <div className="container">
     
      {/* Iterate over data and show `Card` here */}
    </div>
  );
}

export { Body };
