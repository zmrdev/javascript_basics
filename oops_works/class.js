class student{
    constructor(roll_no,st_name,course,total){
        this.roll=roll_no
        this.studentName=st_name
        this.courseDeta=course
        this.totalStudents=total
    }
    printStudentDetails(){
        console.log(this.roll,this.studentName,this.courseDeta,this.totalStudents);
    }
}

var standard=new student(44,"ram","mearn",50)
standard.printStudentDetails()