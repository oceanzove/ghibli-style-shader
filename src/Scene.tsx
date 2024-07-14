import { useState, useRef } from "react";
import {useFrame} from "@react-three/fiber";
import {Mesh} from "three";

interface BoxProps {
    position: [number, number, number];
}

const Box = (props: BoxProps) => {
    const mesh = useRef<Mesh>(null);
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState<boolean>(false);

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.x += delta;
        }
    });

    return (
        <mesh {...props} ref={mesh} scale={active ? 1.5 : 1}
              onClick={() => setActive(!active)}
              onPointerOver={() => setHovered(true)}
              onPointerOut={() => setHovered(false)}>
            <boxGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color={hovered ? "red" : "green"} />
        </mesh>
    )
}

export const Scene = () => (
    <>
        <ambientLight />
        <pointLight position={[10, 10, 10]}/>
        <Box position={[-1.2, 0, 0]}/>
        <Box position={[1.2, 0, 0]}/>
    </>
)