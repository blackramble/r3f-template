// 防止事件冒泡
export const preventCanvasBubbling = (e: any) => {
    e.stopPropagation();
};
