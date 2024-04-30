//Analysis the problem:
// Declaring a function
// Area of rectangle = length * width
// Perimeter of rectangle = 2 * (length + width)
// Area of circle = pi * radius * radius
// Perimeter of circle = 2 * pi * radius
let length = 10;
let width = 20;
let radius = 10;
const PI = 3.14;
calculateRectangleArea = function (length, width) 
    {
       if (length <= 0 || width <= 0) {
        return ;}
        area = length * width;
        return area;
    
    }

console.log(`Rectanglar Area: ${calculateRectangleArea(10, 20)}`);

calculateRectangularPerimeter = function (length, width)
    {   if (isNaN (length) || isNaN(width) || width<= 0 || width <= 0) {
        return ;}

        perimeter = 2 * (length + width);
        return perimeter;
    }

    
console.log(`Rectangular Perimeter: ${calculateRectangularPerimeter(10, 20)}`);

calculateCircleArea = function (radius)
    {   if (isNaN(radius) || radius <= 0) {
        return ;}
        area = PI * radius * radius;
        return area;
    }

console.log(`Circle Area: ${calculateCircleArea(10)}`);

calculateCirclePerimeter = function (radius)
    { if (isNaN(radius) || radius <= 0) {
        return ;}
        perimeter = 2 * PI * radius;
        return perimeter;
    }

    
console.log(`circle permeter: ${calculateCirclePerimeter(10)}`);


