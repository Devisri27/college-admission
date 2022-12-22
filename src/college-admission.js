var studentName = prompt("Enter your name");

var studentHscMarks = prompt("Enter your hsc marks");
var studentHscTotalMarks = prompt("Enter your hsc total marks");

var studentTotalMarks = prompt("Enter your total marks");
var studentCutoff = prompt("Enter your cutoff marks");
var studentSslcMarks = prompt("Enter your sslc marks");
var studentSslcTotalMarks = prompt("Enter your sslc total marks");
var studentGender = prompt("Enter your Gender");



class Applicant {
constructor(name, hscMarks, hscTotalMarks, engineeringCutoff, sslcMarks, sslcTotalMarks,
gender) {
this.studentName = name;
this.studentHscMarks = hscMarks;
this.studentHscTotalMarks = hscTotalMarks;
this.studentCutoff = engineeringCutoff;
this.studentSslcMarks= sslcMarks;
this.studentSslcTotalMarks = sslcTotalMarks;
this.studentGender = gender;
}

}
var applicant = new Applicant(studentName, studentHscMarks, studentHscTotalMarks,
    studentCutoff, studentSslcMarks, studentSslcTotalMarks, studentGender);


console.log(`Applicant Name: ${this.studentName} \nMarks obtained in HSC: ${this.studentHscMarks } \nTotal possible marks in HSC:${this.studentHscTotalMarks} \nMarks Obtained in SSLC:${this.studentSslcMarks} \nTotal possible marks in SSLC:${this.studentSslcTotalMarks} \nGender:${this.studentGender} \nEngineering Cutoff:${this.studentCutoff}`)
 

