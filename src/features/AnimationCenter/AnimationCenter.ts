import { Camera } from '@react-three/fiber';

type SceneLocation = 'basic' | 'someWhere';

interface XYZ {
    x: number;
    y: number;
    z: number;
}
export class AnimationCenter {
    camera: Camera;
    isMoving: boolean;
    where: SceneLocation;
    cameraPosition: XYZ;
    brightness: number;
    isFogOpen: boolean;

    defaultCameraRotation: XYZ;
    cameraRotationOffset: XYZ;

    constructor(camera: Camera) {
        this.camera = camera;
        this.isMoving = false;
        this.isFogOpen = false;
        this.where = 'basic';
        this.brightness = 0;
        this.cameraPosition = { x: 0, y: 0, z: 20 };

        // 基礎角度
        this.defaultCameraRotation = {
            x: 0,
            y: 0,
            z: 0
        };
        // 變化角度
        this.cameraRotationOffset = { x: 0, y: 0, z: 0 };
    }
}
