/**
 * initRem 初始化rem标准
 * @return {Promise<*>}
 */
const initRem = () => {
    let documentElement = document.documentElement,
        resizeEvent = 'orientationchange' in window
            ? 'orientationchange'
            : 'resize';
    const resizeHandle = () => {
        const clientWidth = documentElement.clientWidth;
        if (!clientWidth) {
            return;
        }
        if (clientWidth >= 320 && clientWidth <= 375) {
            documentElement.style.fontSize = 8.533 * (clientWidth / 320) + 'px';
        } else {
            documentElement.style.fontSize = 10 * (clientWidth / 375) + 'px';
        }
    };

    if (!document.addEventListener) {
        return Promise.resolve();
    }

    window.addEventListener(resizeEvent, resizeHandle, false);
    document.addEventListener('DOMContentLoaded', resizeHandle, false);
    resizeHandle();
    return Promise.resolve();
};

export{
    initRem 
}