var app = angular.module('SMS');
app.controller('TaskController' , function( $routeParams , $location , studentService ){



    this.tasks = {
        name : this.name

    };
    this.get = studentService.getData();
    this.click = function(){

        if(this.tasks.name){
            this.get[$routeParams.ide].task.push(this.tasks);
            this.tasks = {};

        }
        else{
            alert("Enter Task");

        }

    }

    this.viewTask = function(path){

        $location.path(path);

    }

    this.show = this.get[$routeParams.ide];







})
