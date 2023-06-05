// var objinfo = [
//     {
//         username: 'sam',
//         password: "1234",
//         mail: "samara2001@gmail.com"
//     },
// ]

// var info = Array.from(objinfo);

var btn = document.getElementById("loginbtn");
console.log(btn);
btn.addEventListener("click", () => {
    var userinput = document.getElementById('username').value;
    var passin = document.getElementById('password').value;
    var emailin = document.getElementById('Email').value;
    // for (var i = 0; i < objinfo.length; i++) {
    //     if (userinput === username &&  passin === password) {
    //         alert('You have successfully logged in...!')
    //     }
    //     else
    //         alert("pleas check your informations ... !!");

    // }

if(emailin=="samarajamals00@gmail.com"&&passin==1223){
    window.location.assign('index-4.html');
    alert("good work");

}

 
else
   {
    alert("try enter you information again...!");
    return;
   }

})
