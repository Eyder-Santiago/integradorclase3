import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";


export default function Fox() {
  //Variable que llama a la ruta donde está ubicada la imagen del zorro
  const fox = useGLTF("/static/Fox.glb");

  //Variable que almacena las acciones y la escena
  const animations = useAnimations(fox.animations, fox.scene);

  //Para usar los efectos 
  useEffect( ()=>{
    const actions = animations.actions.Run;
    actions.play();
  }, [])

  console.log(animations);

  return <primitive
    object={ fox.scene }
    scale={0.2}
    position={[7, 0, 5]}
  />


}