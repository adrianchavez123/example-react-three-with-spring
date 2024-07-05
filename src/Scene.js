import { a, useSpring, useSpringRef } from "@react-spring/three";

const Scene = () => {
  // const [spring, api] = useSpring(() => ({ from: { x: -2 } }));
  const springRef = useSpringRef();
  const spring = useSpring({ ref: springRef, from: { x: -2 } });

  const clickHandler = () => {
    // api.start({
    //   to: { x: 2 },
    // });
    springRef.start({
      to: { x: 2 },
      config: { duration: 5000 },
    });
  };

  const pointerOverHandler = () => {
    springRef.pause();
  };
  const pointerOutHandler = () => {
    springRef.resume();
  };
  return (
    <>
      <a.mesh
        position-x={spring.x}
        onClick={clickHandler}
        onPointerOver={pointerOverHandler}
        onPointerOut={pointerOutHandler}
      >
        <boxGeometry />
        <a.meshBasicMaterial color="orange" />
      </a.mesh>
    </>
  );
};

export default Scene;
