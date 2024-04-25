// Array of test scores for all students
let testScores= [95, 85, 75, 65, 50];
// loop for each test score
 let testScore =90

let grade;

if (testScore >= 90 && testScore <= 100) {
    grade = 'A';
} else if (testScore >= 80 && testScore <= 89) {
    grade = 'B';
} else if (testScore >= 70 && testScore <= 79) {
    grade = 'C';
} else if (testScore >= 60 && testScore <= 69) {
    grade = 'D';

} else  { 
    grade = 'F';
}
console.log(` testScore: ${testScore}, grade: ${grade}`);