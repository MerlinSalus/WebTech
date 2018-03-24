var password = document.getElementById("password");
var confirmpassword = document.getElementById("confirmpassword");

$(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: '/mywebapp/registerHandler.php',
            data: $('form').serialize(),
            success: function (response) {
                console.log(response);
                alert('The form has been submitted!');
            }
        });
    });
});

function passwordCheck(){
   
    var message = document.getElementById("confirmMessage");

    var rightColor = "#00FB98";
    var wrongColor = "#F08080";

    if(password.value == confirmpassword.value){
        confirmpassword.style.backgroundColor = rightColor;
        message.style.color = "black";
        message.innerHTML = "Passwords match";
    } else{
        confirmpassword.style.backgroundColor = wrongColor;
        message.style.color = "black";
        message.innerHTML = "Passwords do not match";
    }
}