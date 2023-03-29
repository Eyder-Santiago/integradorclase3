import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
//importar clase Model
import Model from './Model'
import Model2 from './Model2'

export default function Experience()
{
    return <>
        //Para ver los recursos del pc
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight position={[1, 2, 3]} intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        //importar clase Model
        <Model/>
        <Model2/>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>
    </>
}