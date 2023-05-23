export const turnToDegrees = (deg: number): number => {
    const _deg = (Math.PI / 180) * deg;
    return _deg;
};

export const turnToDegreesArr = (arr: number[]): any => {
    return [
        turnToDegrees(arr[0]),
        turnToDegrees(arr[1]),
        turnToDegrees(arr[2])
    ];
};
