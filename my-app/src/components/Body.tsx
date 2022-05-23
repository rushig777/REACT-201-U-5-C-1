import { Card } from "./Card";
import{useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/action";
function Body() {
 
       const Data:any =useSelector<any, any>((state)=>state)
        const data=Data.Products;
        const dispatch = useDispatch<any>();

  useEffect(() => {
  
    getData(dispatch)
  }, [])
  return (
    <div className="container">
      {
        data.map((el:any)=>{
          <Card item={el} />
        })
      }
      {/* Iterate over data and show `Card` here */}
    </div>
  );
}

export { Body };
