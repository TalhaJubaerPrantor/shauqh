import { Canvas, useFrame } from '@react-three/fiber'
import './StarryNight.css'
import { useGLTF,OrbitControls } from '@react-three/drei'

function Model(props){
  const {scene}=useGLTF("model/starryNight30.glb");

  useFrame(()=>{
    scene.rotation.z-=.005
  })
  return <primitive object={scene} {...props}/>
}

const StarryNight = () => {

    return (
        <>
            <Canvas  dpr={[1,2]} shadows camera={{fov:10}} style={{"position":"absolute",height:"700px",width:"700px", borderRadius:"10px"}}>
                <OrbitControls/>
                <ambientLight intensity={2}/>
                <directionalLight intensity={5} position={[0,15,15]}/>
                    <color attach="background" args={[""]}/>
                      <Model  rotation={[Math.PI/2,0,0]}  position={[0,0,0]}  scale={0.03 }/>
            </Canvas>
        </>
    );
};

export default StarryNight;