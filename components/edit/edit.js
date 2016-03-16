var app = angular.module('SMS');
app.controller('EditController' , function($location , $routeParams , studentService){
    this.get = studentService.getData();

    this.name = this.get[$routeParams.id].name;
    this.email = this.get[$routeParams.id].email;
    this.password = this.get[$routeParams.id].password;
    this.rollNo = this.get[$routeParams.id].rollNo;
    this.class = this.get[$routeParams.id].class;


    this.editStudent = function(path){

        if(this.class <=5){
            this.get[$routeParams.id].name = this.name;
            this.get[$routeParams.id].email = this.email;
            this.get[$routeParams.id].password = this.password;
            this.get[$routeParams.id].rollNo = this.rollNo;

            this.get[$routeParams.id].class = this.class;
            $location.path(path);

        }
       else{

            alert("This Class Is Not In our School!");
        }


    }






})
