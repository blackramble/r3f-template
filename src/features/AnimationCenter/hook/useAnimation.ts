import { gsap } from 'gsap';
import { CustomEase } from 'gsap/all';
import { AnimationCenter } from '../AnimationCenter';

// 經由gsap ease 編輯動作曲線

const EASE = 'M0,0 C0.272,0 0.472,0.455 0.496,0.496 0.574,0.63 0.744,1 1,1 ';

const useAnimation = (
    center: AnimationCenter,
    update: (_percent: number, original?: any) => void,
    duration: number
) => {
    const gsapTarget = {
        percent: 0
    };
    let _percent = 0;

    const handleAnimationAction = (cameraPositionNow?: any) => {
        const timeline = gsap.timeline();
        timeline.to(gsapTarget, {
            percent: 1,
            ease: CustomEase.create('custom', EASE),
            duration: duration,
            onUpdate: () => {
                _percent = gsapTarget.percent;
                handleReset(_percent, cameraPositionNow);
            }
        });
    };

    const handleReset = (_percent: number, cameraPositionNow?: any) => {
        update(_percent, cameraPositionNow);

        if (_percent === 1) {
            _percent = 0;
            gsapTarget.percent = 0;
        }
    };

    return handleAnimationAction;
};

export default useAnimation;
