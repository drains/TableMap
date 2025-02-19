import { PivotControls, useGLTF } from "@react-three/drei"

const Table = () => {
    const table = useGLTF("./static/models/table/wooden_table_02_1k.gltf");
    return (
        <PivotControls activeAxes={[true, false, true]}>
            <primitive object={table.scene} scale={[3,3,3]}/>
        </PivotControls>
      )
}

export default Table;