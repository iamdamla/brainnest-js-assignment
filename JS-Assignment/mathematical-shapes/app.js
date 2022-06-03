const circleEl = document.querySelector(".circle-result");
const circleArea = document.querySelector(".circle-area");
const triangleArea = document.querySelector(".triangle-area");
const squareEl = document.querySelector(".square-result");

// SQUARE
console.log("square");
function Diagonal() {
  const length = 9;
  return (Math.sqrt(2) * length).toFixed(2);
}
console.log(Diagonal());
squareEl.innerHTML = Diagonal();

//TRIANGLE
console.log("triangle");
function Triangle() {
  const length1 = 5;
  const length2 = 6;
  const length3 = 7;
  const s = (length1 + length2 + length3) / 2; //Semi Perimeter
  let p = s * (s - length1) * (s - length2) * (s - length3);
  return Math.sqrt(p).toFixed(2);
}
console.log(Triangle());
triangleArea.innerHTML = Triangle();

//CIRCLE
console.log("circle");
function Circle() {
  const pi = Math.PI;
  const radius = 4;
  return (2 * pi * radius).toFixed(2);
}

function CircleArea() {
  const pi = Math.PI;
  const radius = 4;
  return (pi * Math.pow(radius, 2)).toFixed(2);
}
circleEl.innerHTML = Circle();
circleArea.innerHTML = CircleArea();
console.log(Circle());
console.log(CircleArea());
