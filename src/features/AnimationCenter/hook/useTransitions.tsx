import useAnimation from './useAnimation';
import { AnimationCenter } from '../AnimationCenter';

// 轉場hook
export const useTransitions = (center: AnimationCenter) => {
    const handleBrightnessEject = (_percent: number) => {
        center.brightness = _percent;
    };
    const handleBrightnessLessEject = (_percent: number) => {
        center.brightness = 1 - _percent;
    };
    const handleBrightness = useAnimation(center, handleBrightnessEject, 2);
    const handleBrightnessLess = useAnimation(
        center,
        handleBrightnessLessEject,
        2
    );

    return { handleBrightness, handleBrightnessLess };
};
