import { Environment, Float, ScrollControls } from '@react-three/drei';

import { pages } from '../Stores';
import { Book } from './Book';

const PAGES = pages.length;

const Scene = () => {
  return (
    <>
      <ScrollControls damping={0.25} pages={PAGES}>
        <Float
          rotation-x={-Math.PI / 4}
          floatIntensity={0.3}
          speed={2}
          rotationIntensity={2}
        >
          <Book />
        </Float>
        <Environment preset="studio" />
        {/* <directionalLight
          position={[2, 5, 2]}
          intensity={0.2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0001}
        /> */}
        <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
      </ScrollControls>
    </>
  );
};

export default Scene;
