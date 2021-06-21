const express = require("express");

app = express();

app.get("/",function(req, res){
    // SPREAD OPERATOR
    // const arr1 = [1, 2, 3];
    // const arr2 = [4, 5, 6, 7];
    // const combinedArr = [...arr1, ...arr2];
    // console.log(combinedArr);
    // res.send("Hello");

    //REST PARAMETERS
    // function sum(...theArgs) {
    //     return theArgs.reduce((previous, current) => {
    //       return previous + current;
    //     });
    //   }
      
    //   console.log(sum(1, 2, 3));
    //   // expected output: 6
      
    //   console.log(sum(1, 2, 3, 4));
    //   // expected output: 10
    //   res.send("Hello");

    // //DESTRUCTURING ASSIGNMENT
    // // we have an array with the name and surname
    // let arr = ["John", "Smith"]

    // // destructuring assignment
    // // sets firstName = arr[0]
    // // and surname = arr[1]
    // let [firstName, surname] = arr;

    // console.log(firstName); // John
    // console.log(surname);  // Smith
    // res.send("Hello");

    //ARRAY METHODS
    
    //toString() method
    // var fruits = ["Banana", "Orange", "Apple", "Mango"];
    // console.log(fruits.toString());
    // res.send("Hello");

    //join() method
    // var fruits = ["Banana", "Orange", "Apple", "Mango"];
    // console.log(fruits.join(" * "));
    // res.send("Hello");

    //pop() method
    // var fruits = ["Banana", "Orange", "Apple", "Mango"];
    // var x = fruits.pop();
    // console.log(x);
    // console.log(fruits);
    // res.send("Hello");

    //push() method
    // var fruits = ["Banana", "Orange", "Apple", "Mango"];
    // var x = fruits.push("Kiwi");
    // console.log(x);
    // console.log(fruits);
    // res.send("Hello");

    //shift() method
    // var fruits = ["Banana", "Orange", "Apple", "Mango"];
    // console.log(fruits);
    // console.log(fruits.shift());
    // console.log(fruits);
    // res.send("Hello");

    //unshift() method
    // var fruits = ["Grapes","Banana", "Orange", "Apple", "Mango"];
    // console.log(fruits);
    // console.log(fruits.unshift("Lemon"));
    // console.log(fruits);
    // res.send("Hello");

    // var fruits = ["Grapes","Banana", "Orange", "Apple", "Mango"];
    // console.log(fruits);
    // fruits[0] = "Kiwi";
    // console.log(fruits);

    //length property
    // var fruits = ["Grapes","Banana", "Orange", "Apple", "Mango"];
    // console.log(fruits);
    // fruits[fruits.length] = "Kiwi";
    // console.log(fruits);
    // res.send("Hello");

    //delete operator
    // var fruits = ["Grapes","Banana", "Orange", "Apple", "Mango"];
    // console.log(fruits);
    // delete fruits[0];
    // console.log(fruits);

    //splice() method
    //adding elements
    // var fruits = ["Banana", "Orange", "Apple", "Mango"];
    // console.log(fruits);
    // fruits.splice(2, 0, "Lemon", "Kiwi");
    // console.log(fruits);
    // res.send("Hello");

    //adding and deleting elements
    // var fruits = ["Banana", "Orange", "Apple", "Mango"];
    // console.log(fruits);
    // fruits.splice(2, 2, "Lemon", "Kiwi");
    // console.log(fruits);
    // res.send("Hello");

    //deleting elements with splice() without leaving any loop holes
    // var fruits = ["Banana", "Orange", "Apple", "Mango"];
    // console.log(fruits);
    // fruits.splice(0, 1);
    // console.log(fruits);
    // res.send("Hello");

    //concat() method
    // var arr1 = ["Cecilie", "Lone"];
    // var arr2 = ["Emil", "Tobias", "Linus"];
    // var arr3 = ["Robin", "Morgan"];
    // var myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3
    // console.log(arr1);
    // console.log(arr2);
    // console.log(arr3);
    // console.log(myChildren);
    // res.send("Hello");

    //slice() method
    // var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    // console.log(fruits);
    // console.log(fruits.slice(1, 3));
    // console.log(fruits);
    // res.send("Hello");

    var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    console.log(fruits);
    console.log(fruits.toString());
    res.send("Hello");

});

app.listen(3000, function(){
    console.log("Listening on port 3000")
});