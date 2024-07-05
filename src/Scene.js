// import { animated, useSpring } from "@react-spring/three";
import { a, useSpring } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Scene = () => {
  const [clicked, setClicked] = useState(false);
  let n = 0;
  const { x, y, color } = useSpring({
    from: { color: "hotpink", x: -2 },
    to: { color: "yellow", x: 2 },
    // to: [
    //   { color: "yellow", x: 2 },
    //   { color: "cyan", y: 2 },
    //   { color: "grenyellow", x: -2 },
    //   { color: "hotpink", y: -2 },
    // ],
    // loop: () => 3 > n++,
    delay: 1000,
    // reverse: clicked,
    pause: clicked,
    // reset: clicked,
    // config: { duration: 5000 },
    config: { mass: 20, tension: 700, clamp: false, friction: 100 },
    onStart: () => console.log("start"),
    onRest: () => console.log("rest"),
    onPause: () => console.log("pause"),
    onResume: () => console.log("resume"),
  });

  const clickHandler = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <a.mesh position-x={x} rotation-y={x} onClick={clickHandler}>
        <boxGeometry />
        <a.meshBasicMaterial color={color} />
      </a.mesh>
    </>
  );
};

export default Scene;
