var grades = [100, 50, 75];

var totalGrade = 0;

grades.forEach(function (grades) {
	totalGrade = totalGrade + grades;
})

console.log("Total of grades is: " + totalGrade);
var gradeLength = grades.length;

totalGrade = totalGrade / gradeLength;

console.log("Average of grade is: " + totalGrade);
