import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

const DeskchairModel = () => {
    const { scene } = useGLTF(`${import.meta.env.VITE_APP_BASE_URL.replace(/\/$/, '') || '/'}models/deskchair.glb`)
    return <primitive object={scene} />
}

export const Deskchair = () => {
    return (
        <section className='w-full h-dvh'>
            <Canvas shadows camera={{ position: [-7, 7, -10], fov: 25 }}>
                <Suspense fallback={null}>
                    <DeskchairModel />
                    <ambientLight intensity={0.5} />
                    <rectAreaLight width={20} height={20} intensity={1} color='white' position={[0, 10, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                    <OrbitControls />
                </Suspense>
            </Canvas>
        </section>
    )
}
