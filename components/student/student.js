var app = angular.module('SMS' );
app.controller('StudentController' , function($location , studentService   ){


    this.date = new Date();

    this.optionsArray = [1,2,3,4,5];

    var id = 1001;

    this.students = {
        serNo : 1001,
        name :this.name,
        email:this.email,
        password:this.password,
        task :[],
        rollNo:this.rollNo,
        class : this.class




    }



    this.saveStudents = function(){

        if(this.students.name !== undefined && this.students.email !== undefined && this.students.password !== undefined && this.students.rollNo !== undefined && this.students.class !== undefined ){

            studentService.saveStudent(this.students);
             console.log(this.students.serNo);
            this.students={

            };
        }
        else{
            alert ("Please Fill All The Fields.....");

        }


    }





    this.view = function ( path ) {






        $location.path(path);




    };





})

