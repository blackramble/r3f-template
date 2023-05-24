import { Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const SceneEntrace = () => {
    const ref = useRef<any>();
    useFrame((state, delta) => {
        ref.current.rotation.x += delta;
        ref.current.rotation.y += delta;
    });
    return (
        <>
            <Box ref={ref as any}>
                <meshStandardMaterial color={'orange'} />
            </Box>
        </>
    );
};

export default SceneEntrace;
