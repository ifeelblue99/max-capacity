const heightArray = [1,8,2,5,4,7,9]

function maxCapacity(height) {
    let max = 0;

    let pointerLeft = 0;
    let pointerRight = height.length - 1;

    while(pointerLeft < pointerRight) {
        const minHeight = Math.min(height[pointerLeft], height[pointerRight]);
        const width = pointerRight - pointerLeft;
        max = width * minHeight > max && width * minHeight || max;

        if (height[pointerRight] < height[pointerLeft]) {
            pointerRight--;
        } else {
            pointerLeft++;
        }
    }

    return max;
};
console.log(maxCapacity(heightArray))
