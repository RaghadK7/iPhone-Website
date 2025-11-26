import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';

// مكون الإضاءة
const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <spotLight position={[-10, 10, 5]} angle={0.15} penumbra={1} intensity={0.5} />
    </>
  );
};

// مكون الآيفون (مؤقت - صندوق بديل)
const IPhone = ({ item }) => {
  return (
    <mesh>
      <boxGeometry args={[2, 4, 0.3]} />
      <meshStandardMaterial 
        color={item?.color || '#000000'} 
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

const ModelView = ({ 
  index, 
  groupRef, 
  gsapType, 
  controlRef, 
  setRotationSize, 
  size, 
  item 
}) => {
  return (
    <div
      id={gsapType}
      className={`border-2 border-red-500 w-full h-full ${
        index === 2 ? "right-[-100%]" : ""
      }`}
      style={{ position: 'relative' }}
    >
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{ position: [0, 0, 4], fov: 75 }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        
        <Lights />
        
        <Suspense fallback={null}>
          <IPhone item={item} />
        </Suspense>
        
        <OrbitControls 
          ref={controlRef}
          enableZoom={false}
        />
      </Canvas>
      
      <div className="absolute bottom-2 left-2 text-white bg-black bg-opacity-60 px-2 py-1 rounded text-xs">
        View {index + 1}
      </div>
    </div>
  );
};

// مثال الاستخدام
const App = () => {
  const controlRef = React.useRef();
  const groupRef = React.useRef();
  const [rotationSize, setRotationSize] = React.useState(0);
  
  return (
    <div className="w-full h-screen bg-gray-900 p-4">
      <div className="grid grid-cols-2 gap-4 h-full">
        <ModelView
          index={0}
          groupRef={groupRef}
          gsapType="view1"
          controlRef={controlRef}
          setRotationSize={setRotationSize}
          size={{ width: 400, height: 400 }}
          item={{ color: '#4A90E2' }}
        />
        <ModelView
          index={1}
          groupRef={groupRef}
          gsapType="view2"
          controlRef={controlRef}
          setRotationSize={setRotationSize}
          size={{ width: 400, height: 400 }}
          item={{ color: '#E24A4A' }}
        />
      </div>
    </div>
  );
};

export default ModelView ;