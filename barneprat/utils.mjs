import { addListener } from "./globalTimer.mjs";

const Bound = (item, bounds, callback) => {

    const orgUpdate = item.update;

    addListener(item);
    let boundsViolation = false;

    item.update = () => {

        orgUpdate.call(item)

        if(boundsViolation){
            return;
        }

        let x = item.x;
        let y = item.y;

        if (bounds.left > x) {
            item.x = bounds.left
            boundsViolation = true;
        } else if (bounds.right < x) {
            item.x = bounds.right
            boundsViolation = true;
        }

        if (bounds.top > y) {
            item.y = bounds.top;
            boundsViolation = true
        } else if (bounds.bottom < y) {
            item.y = bounds.bottom
            boundsViolation = true
        }

        if (boundsViolation) {
            callback(item);
            boundsViolation = false;
        }

    }
}

const Bounds = (left, top, right, bottom) => {
    return { left, top, right, bottom }
}

export { Bound, Bounds }