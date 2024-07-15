import { Canvas } from '@react-three/fiber';
import {OrbitControls} from "@react-three/drei";
import {Scene} from "./Scene";
import Ground from "./Ground";

export const FiberContainer = () => (
    <Canvas camera={{position: [14.5, 2, 5.5], fov: 40}} shadows>
        <Scene />
        <Ground />
        <OrbitControls minDistance={1} maxDistance={200} />
    </Canvas>
)