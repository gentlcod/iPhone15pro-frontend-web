import { View, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import React, { Suspense } from 'react';
import Lights from './Lights';
import Loader from './Loader';
import * as THREE from 'three';
import Iphone from './Iphone'; // Assuming this is correctly imported

const ModelView = ({ index, gsapType, groupRef, controlRef, setRotationState, size, item }) => {
  return (
    <View
      index={index}
      type={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
      id={`view${index}`} 
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group
        ref={groupRef}
        name={index === 1 ? 'small' : 'large'}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <Iphone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
