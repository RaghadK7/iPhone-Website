import React from 'react'

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
    <group
      ref={groupRef}
      name={gsapType}
      className={`border-2 border-red-500 w-full h-full ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* ضوء محيط */}
      <ambientLight intensity={0.3} />

      {/* مثال لصندوق */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={index === 2 ? 'red' : 'blue'} />
      </mesh>
    </group>
  )
}

export default ModelView
