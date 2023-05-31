import { OrbitControls } from "@react-three/drei";
import { Background } from "./Background";
export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Background />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>{" "}
    </>
  );
};
