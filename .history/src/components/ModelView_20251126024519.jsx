import { Canvas, useThree } from "@react-three/fiber";

function Lights() {
  const { camera } = useThree();
  return <ambientLight intensity={0.5} />;
}

export default function App() {
  return (
    <Canvas>
      <Lights />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
}
