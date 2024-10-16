import { Canvas, useFrame } from '@react-three/fiber'
import './StarryNight.css'
import { useGLTF,OrbitControls } from '@react-three/drei'
import "./StarryNight.css"
function Model(props){
  const {scene}=useGLTF("model/starryNight30.glb");

  useFrame(()=>{
    scene.rotation.z-=.005
  })
  return <primitive object={scene} {...props}/>
}

const StarryNight = () => {

  
  let style={}
  const s1={
    height:"600px",
    width:"350px"
  }
  const s2={
    height:"600px",
    width:"600px"
  }
  let windowWidth=window.innerHeight
  if(windowWidth<880){
    style=s1
  }else{
    style=s2
  }


  
    return (
        < div className='obj'>
            <Canvas dpr={[1,2]} shadows camera={{fov:10}} style={style}>
                {/* <OrbitControls/> */}
                <ambientLight intensity={2}/>
                <directionalLight intensity={5} position={[0,15,15]}/>
                    <color attach="background" args={[""]}/>
                      <Model  rotation={[Math.PI/2,0,0]}  position={[0,0,0]}  scale={0.03 }/>
            </Canvas>
        </div>
    );
};

export default StarryNight;