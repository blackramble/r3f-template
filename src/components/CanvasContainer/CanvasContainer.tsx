// import * as THREE from 'three';
import { createContext } from 'react';
import { memo } from 'react';
import useAnimationCenter from '../../features/AnimationCenter/hook/useAnimationCenter';
import SceneEntrace from './SceneEntrace/SceneEntrace';
import CanvasSetting from './CanvasSetting/CanvasSetting';

export const MainContext: any = createContext(null);

const CanvasContainer = () => {
    const center = useAnimationCenter();

    return (
        <MainContext.Provider value={{ center }}>
            <CanvasSetting />
            <SceneEntrace />
        </MainContext.Provider>
    );
};

export default memo(CanvasContainer);
