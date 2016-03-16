var app = angular.module('SMS');

app.service('studentService' , function(){

   var studentData = [];

    this.saveStudent = function(studentObject){

        studentData.push(studentObject);
        console.log(studentData);

    }


    this.getData = function(){

        return studentData;

    }



})

