import { AnimationCenter } from '../AnimationCenter';
import { useThree } from '@react-three/fiber';

const useAnimationCenter = () => {
    const { camera } = useThree();
    const center = new AnimationCenter(camera);

    return center;
};

export default useAnimationCenter;
