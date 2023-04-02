var courses = [];
var no_of_courses = Number(prompt("Enter number of courses"))

for (var i = 0; i < no_of_courses; i++) {
    courses.push(prompt(`Course ${i} name`,"computer"));
}

alert(courses);

for(var i = 0; i < courses.length; i++) {
    courses[i] = prompt("Edit value", courses[i])
}

alert(courses);