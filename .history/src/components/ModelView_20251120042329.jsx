const ModelView = ({ index }) => {
  return (
    <group>
      {/* مؤقتًا */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={index === 2 ? 'red' : 'blue'} />
      </mesh>
    </group>
  )
}

export default ModelView;
