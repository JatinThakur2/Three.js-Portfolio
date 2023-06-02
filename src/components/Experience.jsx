import { OrbitControls } from "@react-three/drei";
import { Background } from "./Background";
import { Airplane } from "./Airplane";
import { Cloud } from "@react-three/drei";
export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Background />
      <Airplane />
      <Cloud />
      <mesh>
        {/* <boxGeometry />
        <meshNormalMaterial /> */}
      </mesh>{" "}
    </>
  );
};
