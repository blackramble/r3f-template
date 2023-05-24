import { useContext } from 'react';
import { MainContext } from '../components/CanvasContainer/CanvasContainer';
import { AnimationCenter } from '../features/AnimationCenter/AnimationCenter';

const useCenterContext = () => {
    const center: AnimationCenter = useContext(MainContext);
    return { ...center };
};

export default useCenterContext;
