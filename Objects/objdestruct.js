// Object Destructuring
const course = {
    name: "CSE",
    price: 999,
    teacher: "Hitesh"
}

const {teacher, course: courseName} = course
console.log(teacher);
console.log(courseName);

