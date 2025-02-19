import { OrbitControls } from "@react-three/drei";
import "./App.css";
import Table from "./Table";
import Wall from "./Wall";

function App() {
  return (
    <>
      <OrbitControls makeDefault />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>
      <Table />
      <Wall />
    </>
  );
}

export default App;
