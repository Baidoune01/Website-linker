import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas 
      style={{ background: 'transparent',width: '400px', height: '400px', position: 'relative', left: '50vw' }} 
      gl={{ alpha: true, antialias: true, logarithmicDepthBuffer: true }}
      camera={{ position: [0, 2, 5], fov: 30 }}
    >
      <Experience />
    </Canvas>
  );
}

export default App;
