// import {
//   ContactShadows,
//   Environment,
//   OrbitControls,
//   Sky,
// } from "@react-three/drei";
// import { useControls } from "leva";
// import { Avatar } from "./Avatar";

// export const Experience = () => {
//   const { animation } = useControls({
//     animation: {
//       value: "Typing",
//       options: ["Typing", "Falling", "Standing"],
//     },
//   });
//   return (
//     <>
//       <OrbitControls />
//       <Sky />
//       <Environment preset="sunset" />
//       <group position-y={-1}>
//         <ContactShadows
//           opacity={0.42}
//           scale={10}
//           blur={1}
//           far={10}
//           resolution={256}
//           color="#000000"
//         />
//         <Avatar animation={animation} />
//         {animation === "greeting"}
//       </group>
//     </>
//   );
// };

// Experience.jsx
import { ContactShadows, Environment, OrbitControls, Sky } from "@react-three/drei";
import { useControls } from "leva";
import { Avatar } from "./Avatar";

export const Experience = () => {
  const animation = "greeting";
  
  return (
    <>
      <OrbitControls />
      <Environment preset="sunset" />
      <group position={[0, -1, 0]}>
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <Avatar animation={animation} />
      </group>
    </>
  );
};