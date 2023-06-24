import { Canvas } from "@react-three/fiber";
import { Experience1 } from "./components1/Experience1";

function App1() {
  return (
    <Canvas 
      style={{ background: 'transparent',width: '400px', height: '400px'}} 
      gl={{ alpha: true, antialias: true, logarithmicDepthBuffer: true }}
      camera={{ position: [0, 2, 5], fov: 30 }}
    >
      <Experience1 />
    </Canvas>
  );
}

export default App1;
