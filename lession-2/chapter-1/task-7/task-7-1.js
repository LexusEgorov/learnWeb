const field = document.querySelector('#field');
const fieldOuterCoords = field.getBoundingClientRect();


const leftTopOutsideAngle = [fieldOuterCoords.left, fieldOuterCoords.top];
const rightBottomOutsidAngle = [fieldOuterCoords.right, fieldOuterCoords.bottom];

const leftTopInsideAngle = [fieldOuterCoords.left + field.clientLeft, fieldOuterCoords.top + field.clientTop];
const rightBottomInsideAngle = [fieldOuterCoords.right + field.clientLeft + field.clientWidth, fieldOuterCoords.bottom + field.clientTop + field.clientHeight];