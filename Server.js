function Register(event) {
    // alert("function")
    event.preventDefault();

    var Name = document.getElementById("Tanishqname").value;
    // console.log(Name)
    var Email = document.getElementById("Tanishqemail").value;
    // console.log(Email)
    var Password = document.getElementById("Tanishqpassword").value;
    // console.log(Password)
    var Confirmpassword = document.getElementById("Tanishqconfirmpassword").value;
    // console.log("Confirmpassword")
    if(Name && Email && Password && Confirmpassword) {
        if(Password.length >=8 && Confirmpassword){
            if(Password == Confirmpassword) {

                var Ls = JSON.parse(localStorage.getItem("TanishqUsers")) || []
                var flag = false;
                for (var i = 0; i < Ls.length; i++) {
                    if (Ls[i].userEmail == Email) {
                        flag = true;
                    }
                }
                if (!flag) {
                    var userdata = {userName: Name,userEmail: Email,userPassword: Password,userConfirmPassword: Confirmpassword}
                    Ls.push(userdata);
                    localStorage.setItem("TanishqUsers", JSON.stringify(Ls))
                    alert("Registration Successful");
                    window.location.href = `./TanishqLogin.html`;
                    document.getElementById("Tanishqname").value = ""
                    document.getElementById("Tanishqemail").value = ""
                    document.getElementById("Tanishqpassword").value = ""
                    document.getElementById("Tanishqconfirmpassword").value = ""
                }
            }else {
                console.log("Password Not Matched")
            }
        }else {
            console.log("Password should contain alteast 8 characters")
        }
    }else {
        console.log ("All fields are mandatory")
    }
}