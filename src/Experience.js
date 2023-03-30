import { FirstPersonControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
//importar clase Model
import Model from './Model'
import Fox from './Fox'

export default function Experience()
{
    return <>
        //Para ver los recursos del pc
        <Perf position="top-left" />

        const controlsRef = useRef();


        <FirstPersonControls 
            movementSpeed = {100}
            lookSpeed = {0.01}
            lookVertical = {true}
        />

        <directionalLight position={[1, 2, 3]} intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        //importar clase Model
        <Model/>
        <Fox/>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>
    </>
}