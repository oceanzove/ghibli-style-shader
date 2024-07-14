import { Canvas } from '@react-three/fiber';
import {OrbitControls} from "@react-three/drei";

export const FiberContainer = () => (
    <Canvas camera={{position: [14.5, 2, 5.5], fov: 40}} shadows>
        <OrbitControls minDistance={1} maxDistance={200} />
    </Canvas>
)