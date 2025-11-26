import { PerspectiveCamera } from "@react-three/drei";
import { AmbientLight } from "three";
import Lights from "./Lights";
import { Suspense } from "react";

const ModelView = ({ index  , groupRef , gsapType , controlRef , setRotationSize , size , item}) => {
  return (
    <view
    index ={index}
      id={gsapType}
      className={`border-2 border-red-500 w-full h-full ${
  index === 2 ? "right-[-100%]" : ""
}`}
>
        
        <AmbientLight intensity ={0.3} />
        <PerspectiveCamera  makeDefault position={[0 , 0 , 4]}/> 
        <Lights />
      <Suspense fallback={<div>Loading...</div>}>

      </Suspense>
    </view>
  )
}

export default ModelView;
