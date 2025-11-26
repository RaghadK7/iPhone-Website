// App.jsx أو أي ملف رئيسي
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Html, OrbitControls } from "@react-three/drei";
import ModelView from "./ModelView";

const App = () => {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh", display: "block" }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      {/* تحكم باللمس */}
      <OrbitControls enableZoom={true} enablePan={true} />

      {/* الإضاءة الأساسية */}
      <ambientLight intensity={0.3} />

      {/* الموديل داخل Suspense */}
      <Suspense fallback={<Html>Loading...</Html>}>
        <ModelView />
      </Suspense>
    </Canvas>
  );
};

export default App;
