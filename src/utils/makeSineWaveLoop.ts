import { Clock } from 'three';
import { turnToDegrees } from './turnToDegrees';

// 正弦波 ＋ 絕對值 附帶百分比（0~1~0的百分比）
export const makeSineWaveLoop = (clock: Clock, second: number) => {
    const loop = Math.abs(
        Math.sin(turnToDegrees((clock.elapsedTime * 180) / second))
    );

    const percent = (clock.elapsedTime % second) / second;

    return { loop, percent };
};
