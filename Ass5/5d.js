let student = {
    firstName: 'Peter',
    lastName: 'Parker',
    id: 1,
    courses: ['SQL', 'Polish', 'Java Programming'],
    grades: [1, 2, 3, 4, 5],
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set fullName(name) {
        let parts = name.split(' ');
        if (parts.length !== 2) throw "The full name consists of two fords: firstname and lastname.";
        this.firstName = parts[0];
        this.lastName = parts[1];
    },
    get avGrade() {
        if (this.grades.length === 0)
            return 0;
        return this.grades.reduce((sum, grade) => sum + grade) / this.grades.length;
    }
}

console.log("full name:", student.fullName, "\ngrades average:", student.avGrade);
student.fullName = "Natan Drake";
console.log("new full name:", student.fullName);