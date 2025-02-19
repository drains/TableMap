import { useRef } from "react";

const Wall = () => {
    const meshRef = useRef(null);
    return (
        <mesh ref={meshRef} scale={[20,5,1]} position={[0,0,5]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      )
}

export default Wall;