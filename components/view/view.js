var app = angular.module('SMS');
app.controller('ViewController' , function(studentService){

    this.showData = studentService.getData();
    this.delete = function(id){


        this.showData.splice(id , 1);

    }
    /*this.move = function(id , direction){


        if(direction === 'down'){


            if(id === this.showData.length -1){
                return;

            }




        }

        else if(direction === 'up'){

            if(id === 0){
                return;


            }
            id = id -1;

        }
        var getItem = this.showData[id];
        this.showData[id] = getItem;
        console.log(this.showData[id]);
        console.log(getItem);
        console.log(this.showData.splice(id + 2 , 0 , getItem));
        console.log(this.showData.splice(id ,1));


    }

   this.check = function()
   {

        alert("Hello World!");

    }*/


})
