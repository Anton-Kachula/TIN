function createStudent(firstName, lastName, id) {
    const studentPrototype = {
        firstName: 'Peter',
        lastName: 'Parker',
        id: 1,
        courses: ['SQL', 'Polish', 'Java programming'],
        grades: [],
        avGrade: function () {
            if (this.grades.length === 0)
                return 0;
            return this.grades.reduce((sum, grade) => sum + grade) / this.grades.length;
        }
    }
    let student = Object.create(studentPrototype);
    student.firstName = firstName;
    student.lastName = lastName;
    student.id = id;
    return student
}

let student = createStudent('Natan', 'Drake', 2);

function printInformation(object) {
    for (let prName in object) {
        let pr = object[prName];
        console.log("name: " + prName + "\nvalue:" + pr + "\ntype:" + typeof pr + "\n");
    }
}

printInformation(student);