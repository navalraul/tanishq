function Login (event){
    // alert ("working")
    event.preventDefault();

    var userEmail = document.getElementById("Tanishqemail").value;
    var userPassword = document.getElementById("Tanishqpassword").value;

    var Ls = JSON.parse(localStorage.getItem("TanishqUsers"));

    var TanishqcurrentUser;
    var flag = false;
    for (var i=0;i< Ls.length;i++) {
        if (Ls[i].userEmail == userEmail && Ls[i].userPassword == userPassword) {
            flag = true;
            TanishqcurrentUser = Ls[i];
        }
    }
    if (flag == true) {
        localStorage.setItem("TanishqcurrentUser",JSON.stringify(TanishqcurrentUser))
        window.location.href = './Tanishqjs.html';
        alert("Login Successful")
    }else {
        alert("Credential not Matched")
    }

}