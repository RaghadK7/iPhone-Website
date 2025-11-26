import { AmbientLight } from "three";

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
      
    </view>
  )
}

export default ModelView;
