import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import { memo, Suspense } from 'react';
import CanvasContainer from '../CanvasContainer/CanvasContainer';

const CanvasEntrace = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Canvas
                flat
                // linear
                shadows={false}
                className="experience"
                camera={{
                    fov: 30,
                    near: 0.1,
                    far: 330
                }}
                gl={{ powerPreference: 'high-performance' }}
                dpr={[1, 1]}
            >
                <CanvasContainer />
            </Canvas>
        </Suspense>
    );
};

export default memo(CanvasEntrace);
