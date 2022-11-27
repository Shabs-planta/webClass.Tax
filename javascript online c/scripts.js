

// alert("page is loaded");

document.getElementById("some-text").innerHTML = "changed text"; 
document.getElementById("some-button").onclick = function() {
    alert("the button is clicked");
}

document.getElementById("name-button").onclick = function() {
    document.getElementById("name-button").innerHTML = "thank you";
}


// assign a code to a made up variable.

Elementname = document.getElementById("namebutton");

Elementname.onclick = function() {
    Elementname.innerHTML = "Goooooooood";
}


// getting input from user

document.getElementById("get-value").onclick = function() {
    val = document.getElementById("get-text").value;
    alert(val);
    // document.getElementById("get-text").value = "";
}

// when the add button is clicked
document.getElementById("add").onclick = function() {

    // assign input value to item variable
    var items = document.getElementById("items").value;
    // add that value to the list
    document.getElementById("list").innerHTML += 
    "<li>" + items + "</li>";
    // empty the input box
    document.getElementById("items").value = "";
}


document.getElementById("disappear").onclick = function() {
    document.getElementById("GreenCircle").style = "display: none;";
    document.getElementById("YellowCircle").style = "display: none;";
}

document.getElementById("GreenCircle").onclick = function() {
    document.getElementById("GreenCircle").style = "display: none;";
}

document.getElementById("YellowCircle").onclick = function() {
    document.getElementById("YellowCircle").style = "display: none;";
}

        // 1. when the button is clicked get the input value
        // 2. check if input value is empty
        // 3. if its not empty, check if its correct
        // 4. if value is correct, sign in th user
        // 5. if value is incorrect, give a warning

        var x = 3;
        // alert(x);

        var x;
        x = 20;
        // alert(x);

        var x = 20;
        var y;
        y = 15;
        var total = x+y;
        // alert(total);

        var x = 10;
        var y = 11;
        var multiple = x * y;
        // alert(multiple);

        var x = 10;
        var y = 2;
        var divided = x / y;
        // alert(divided);

        var x = 10;
        var y = 2;
        var subtract = x - y;
        // alert(subtract);

        var x = 10;
        var y = 2;
        var divided = x / y;
        // alert(" x / y = " + divided);

        var his = "shabs";
        var age = 26;
        var height = 175;

        // alert(
        //     "Name : " + his +
        //     "Age : " + age +
        //     "Height : " + height + "cm"
        //     );


        document.getElementById("submit").onclick = function() {
            var myname = document.getElementById("myname").value;
            var myage = document.getElementById("myage").value;

            alert(
                "User name : " + myname +
                " User age : " + myage 
            );
        }
    
     
        // if else statement

        var x = 25;
        if (x == 25) {
            // alert("x is 25");
        }

        var x = 30;
        if (x == 10) {
            // alert("x is 10");
        }
        else if (x == 20) {
            // alert("x is 20");
        }
        else if (x == 30) {
            // alert("x is 30");
        }
        else {
            // alert("none of the above");
        }

        var x = 20;
        if (x != 20) {
            // alert("x isn't 20");
        }
        else {
            // alert("x is 20");
        }

        var hes = "plant";
        if (hes == "planta") {
            // alert("Welcome");
        }
        if (hes != "planta") {
            // alert("wrong username");
        }

        document.getElementById("infobutton").onclick = function() {
            var info = document.getElementById("info").value;

            if (info == "shabs") {
                document.getElementById("infoview").innerHTML = "welcome " + info;
            }
            else if (info == "jack") {
                document.getElementById("infoview").innerHTML = "welcome " + info;
            }
            else {
                document.getElementById("infoview").innerHTML = "wrong information";
            }

            // document.getElementById("info").value = "";
        }

        document.getElementById("infobutton").onclick = function() {
            var info = document.getElementById("info").value;

            if (info == "shabs" || info == "naims" || info =="goat") {
                document.getElementById("infoview").innerHTML = "welcome " + info;
            }
            else {
                document.getElementById("infoview").innerHTML = "wrong infomation";
            }
        }

        document.getElementById("userbutton").onclick = function() {

            var username = document.getElementById("username").value;
            var userpass = document.getElementById("userpass").value;

            if (
                (username == "shabs" && userpass == "129") || 
                (username == "joe" && userpass == "111") ||
                (username == "emma" && userpass == "234")
                ) {
                document.getElementById("result").innerHTML = "welcome " + username;
            }

            else {
                document.getElementById("result").innerHTML = "wrong username or password";
            }
        }


        var number = 3;
        if (number > 5) {
            // alert(number + " " + "is bigger than 5");
        }
        else{
            // alert(number + " " + "not bigger than 5");
        }

        var number = 8;
        if (number >= 5) {
            // alert(number + " " + "is bigger than 5");
        }
        else{
            // alert(number + " " + "is smaller than 5");
        }

        document.getElementById("v-button").onclick = function() {

            var vage = document.getElementById("vage").value;

            if (vage >= 100) {
                alert("you are too old");
            }
            else {
                alert(vage + " " + "is okay");
            }
        }

        document.getElementById("g-button").onclick = function() {

            var grades = document.getElementById("grades").value;

            if (grades > 100) {
                alert("please enter the correct grade");
            }
            // you can use your if i this form also...
            else if (grades >= 75 && grades <= 100) {
                alert("you got an A");
            }
            else if (grades >= 50) {
                alert("you got a B");
            }
            else if (grades >= 25) {
                alert("you got a C");
            }
            else if (grades >= 0) {
                alert("you have FAILED...");
            }

        }

        // increment and decrement of values.

        var i = 70; // i=70
        i = i + 80; // i=150
        i = i / 50; // i=3
        i = i * 20; // i=60
        i = i - 20; // i=40
        // alert(i);

        // for loops

        var i;
        for (i=1; i<=5; i=i+1) {
            // console.log(i);
        }

        var x;
        for (x=1; x<=10; x=x+2) {
            // console.log(x);
        }

        // while loops

        var a = 1;
        while (a <= 10) {
            // console.log(a);
            a++;
        }

        // do while loops

        var b = 1;
        do {
            // console.log(b);
            b++;
        }while(b <= 10);

        // array 
        // accessing array
        // i programming users starts from 0 > upward.


        var users = ["shabs", "bayo", "joe", "tope"];
        var u;

        // console.log(users[0]);
        // console.log(users[1]);
        // console.log(users[2]);
        // console.log(users[3]);

        for (u=0; u<=3; u++) {
            // console.log(users[u]);
        }
        // OR
        for (u=0; u<=users.length-1; u++) {
            // console.log(users[u]);
        }

        // lets find a certain user

        var users = ["shabs", "bayo", "joe", "tope"];
        var i;
        // we loop through the user array.
        for (i=0; i<=users.length-1; i++) {
            // if joe exists at i. index
            if (users[i] == "sha") {
                // print that john exists
                console.log("the user number " + i + " is joe");
            }
        }

        // Functions

        var firstname = 3;
        var secondname = 7;
        var average = (firstname + secondname) / 2;
        // alert(average);



        function avarage(fst,snd){
            // return (fst + snd) / 2;

            
            // or

            var avarage = (fst + snd) / 2;
            return avarage;
        }

        // alert(avarage(3,5));
        // alert(avarage(20,10));
        console.log(avarage(10,6));


        function result(userAge,broAge) {
            
            var calculate = userAge - broAge;

            if (calculate > 0) {
                alert("My brother is " + calculate + " years older than me");
            }
            else if (calculate < 0) {
                alert("I'm " + calculate + " year younger than my brother");
            }
            else {
                alert("you are both age mate");
            }
        }

        document.getElementById("Calculator").onclick = function() {
            var userAge = document.getElementById("userAge").value;
            var broAge = document.getElementById("broAge").value;

            result (userAge, broAge);
        }



