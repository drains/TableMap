import { OrbitControls, PivotControls, useGLTF } from "@react-three/drei";
import "./App.css";

function App() {
  const table = useGLTF("./static/models/table/wooden_table_02_1k.gltf");
  return (
    <>
      <OrbitControls makeDefault />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>
      <PivotControls activeAxes={[true, false, true]}>
        <primitive object={table.scene} />
      </PivotControls>
    </>
  );
}

export default App;
