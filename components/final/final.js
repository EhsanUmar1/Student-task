var app = angular.module('SMS');
app.controller('FinalController' , function($rootScope ,$location ){




  this.tasks =  $rootScope.tasks;
  this.nameStd = $rootScope.studentName;

  this.logOut = function(path){

    $location.path(path)

  }






})
