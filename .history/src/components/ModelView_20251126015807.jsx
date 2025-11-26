// ModelView.jsx
import React from 'react'

const ModelView = ({ index }) => {
  return (
    <group>
      <ambientLight intensity={0.3} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={index === 2 ? 'red' : 'blue'} />
      </mesh>
    </group>
  )
}

export default ModelView
