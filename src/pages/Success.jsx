import { useEffect, useState } from "react";
import {BallTriangle} from "react-loader-spinner"
useState
const Success = () => {
  const [loading, setloading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 2000);
   
  },[])
  
  return (
    <>
    
      <div className="flex flex-col justify-center items-center h-screen text-center">
    {
      loading?<BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>:  <div>
        <h1 className=" font-bold text-2xl">Order Succesfully Placed!!!</h1>
        <h2>Your item has been Succesfully placed</h2>
      </div>
    }   
      </div>
    </>
  );
};

export default Success;
