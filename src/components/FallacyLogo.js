import {React, useRef, useState, useEffect} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { hover } from '@testing-library/user-event/dist/hover'



function FallacyLogoModel({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/fallacyLogo.glb')
  const [hovered, setHovered] = useState("none")



   useFrame(() => (group).current.rotation.y += props.rotationSpeed)


  return (
    <group onPointerOver={() => {setHovered("'block'"); console.log(hovered)}}
           onPointerOut={() => {setHovered("'none'"); console.log(hovered)}} ref={group} {...props} dispose={null} position={[0,0,0]}  scale={.3} >
      <mesh geometry={nodes.Text.geometry} material={nodes.Text.material} position={[0,0,0]} rotation={[Math.PI / 2, 0, 0]} scale={10.01} />
    </group>
  )
}





export default function FallacyLogo({hovered}) {

const [rotationSpeed, setRotationSpeed] = useState(0.005)



    return(
        <div className='canvas' >
            <Canvas>
                <directionalLight intensity={1} position={[10,10,10]} /> 
                <directionalLight intensity={1} position={[-10,-10,-10]} /> 
                <FallacyLogoModel rotationSpeed={rotationSpeed}/>
                
            </Canvas>
         

        </div>
    )
}

useGLTF.preload('/fallacyLogo.glb')