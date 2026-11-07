class Student {
    constructor(name, id, grades) {
        this.name = name;
        this.id = id;
        this.grades = grades;
    }

    calculateAverage() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }
}

class StudentManagementSystem {
    constructor() {
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    getTopStudents(threshold) {
        return this.students.filter(student => student.calculateAverage() >= threshold);
    }

    getStudentNames() {
        return this.students.map(student => student.name);
    }
}

const sms = new StudentManagementSystem();
sms.addStudent(new Student("Donia", 101, [85, 90, 95]));
sms.addStudent(new Student("Ahmed", 102, [70, 75, 80]));

console.log("Student Names:", sms.getStudentNames());
console.log("Top Students:", sms.getTopStudents(85));
