








document.getElementById("button").onclick = function() {

    var Fname = document.getElementById("Fname").value;
    var Lname = document.getElementById("Lname").value;
    var fullnames = Fname + " " + Lname;

    console.log("Full-Name : " + fullnames);

    

    var Uname = document.getElementById("Uname").value;
    console.log("Login : " + Uname);



    var Pname = document.getElementById("Pname").value;
    var Pname1 = document.getElementById("Pname1").value;
    var pass = Pname + " Confirm pin : " + Pname1;

    console.log("Password" + pass);
}

document.getElementById("Atag").onclick = function() {
    alert("Page not availabe.")
}