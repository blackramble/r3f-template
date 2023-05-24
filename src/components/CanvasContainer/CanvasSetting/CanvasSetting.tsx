import { useControls } from 'leva';
import {
    Stats,
    AdaptiveEvents,
    Environment,
    OrbitControls,
    Preload
} from '@react-three/drei';
import Cam from '../../models/Cam/Cam';
import {
    EffectComposer,
    BrightnessContrast,
    SMAA
} from '@react-three/postprocessing';
import { useFrame } from '@react-three/fiber';
import { memo, useRef } from 'react';
import useCenterContext from '../../../hooks/useCenterContext';

const CanvasSetting = () => {
    const center = useCenterContext();
    const brightnessRef = useRef<any>();

    const { orbitControlss } = useControls({
        orbitControlss: { value: true }
    });

    useFrame(() => {
        if (!brightnessRef) return;
        brightnessRef.current.brightness = center.brightness;
    });
    return (
        <>
            {orbitControlss ? <OrbitControls /> : <Cam />}

            <Preload all />
            <Environment preset="city" />
            <Stats showPanel={0} />
            <AdaptiveEvents />

            <EffectComposer>
                <BrightnessContrast
                    ref={brightnessRef}
                    brightness={0}
                />
                <SMAA />
            </EffectComposer>
        </>
    );
};

export default memo(CanvasSetting);
