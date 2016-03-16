var app = angular.module("SMS", ["ngNewRouter" ]);


app.controller("mainController", function( $router ){

    $router.config([
        {path : "/", component : "login"},
        {path : "/login", component : "login"},
        {path : "/student", component : "student"},
        {path : "/view", component : "view"},
        {path : "/edit/:id", component : "edit"},
        {path : "/task/:ide", component : "task"},
        {path : "/final", component : "final"}

    ]);


});
