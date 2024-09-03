import { Leva, useControls } from 'leva';

import { Loader, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import './App.css';
import Scene from './Components/Scene';
import { UI } from './Components/UI';

function App() {
  const { orbitcontrols, axesHelper } = useControls('mainControls', {
    orbitcontrols: true,
    axesHelper: false,
  });
  return (
    <>
      <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
        {/* <color attach="background" args={["#f0f0f0"] as any} /> */}
        <Scene />
        {orbitcontrols && (
          <OrbitControls
            //  autoRotate
            enableZoom={false}
          />
        )}
        {axesHelper && <axesHelper />}
      </Canvas>
      <Leva collapsed hidden />
      <Loader />
      <UI />
    </>
  );
}

export default App;
