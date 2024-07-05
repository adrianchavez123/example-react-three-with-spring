// import { animated, useSpring } from "@react-spring/three";
import { a, useSpring } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Scene = () => {
  // const [click, setClick] = useState(false);
  // const { scale, color } = useSpring({
  //   from: { scale: click ? 1 : 2, color: click ? "orange" : "hotpink" },
  //   to: { scale: click ? 2 : 1, color: click ? "hotpink" : "orange" },
  // });

  // console.log(scale);
  // const clickHandler = () => {
  //   setClick(!click);
  // };

  const [spring, api] = useSpring(() => ({ from: { x: 0 } }));

  const handleClick = () => {
    api.start({ to: { x: spring.x.get() === 1 ? 0 : 1 } });
  };

  useFrame(() => {
    console.log(spring.x.get());
  });
  console.log("render");
  console.log(spring);
  return (
    <>
      <a.mesh onClick={handleClick} position-x={spring.x}>
        <boxGeometry />
        <a.meshBasicMaterial color="orange" />
      </a.mesh>
    </>
  );
};

export default Scene;
