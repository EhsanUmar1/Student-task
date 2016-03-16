var app = angular.module('SMS');
app.controller('LoginController' , function($location , admin , studentService , $rootScope  ){
$rootScope.classy = 'check';
/*
    this.email = admin.adm.name;
    this.pass = admin.adm.password;*/

    this.studentData = studentService.getData();
    this.adminLogin = function ( path ) {

         if(this.email === admin.adm.name && this.pass === admin.adm.password  )
         {$location.path(path);}
        else {alert("Email And Password Is Not Correct!....");}
    };
    this.studentLogin = function ( path ) {

        var flag = false;

        for(var i in this.studentData){
            if(this.studentEmail === this.studentData[i].email && this.studentPass === this.studentData[i].password  )
                {$location.path(path);
                    $rootScope.tasks =this.studentData[i].task;
                    $rootScope.studentName = this.studentData[i].name;
                flag = true;
                    break;

                }


        }

        if(!flag){

            alert("Email And Password Is Not Correct!....");
        }


    };





})

