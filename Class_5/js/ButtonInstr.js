//Merlin-Eliise Salus
//5th week class work
function GreenButChange(){
    var button = document.getElementById("GreenButton");
    if(button.innerHTML=="Red Button")
    {
        button.innerHTML = "Button Green";
        button.style.backgroundColor = "green";
    }
    else{
        button.innerHTML = "Red Button";
        button.style.backgroundColor = "red";
    } 
}


function AllFields(){
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var subject = document.getElementById("subject").value;
    var comment = document.getElementById("comment").value;

    var all = [name, mail, subject, comment];
    var numberOfEmptyFields = 0;

    for(var i = 0; i < all.length; i++)
    {
        if (!all[i])
        {
            numberOfEmptyFields++;
        }
    }
    
    if (numberOfEmptyFields > 1)
    {
        alert("Please fill in all fields!");
        return;
    } else if (numberOfEmptyFields == 1)
    {
        if(!name)
        {
            alert("Please fill in name field!");
            return false;
        }
        else if(!mail)
        {
            alert("Please fill in email field!");
            return;
        }
        else if(!subject)
        {
            alert("Please fill in subject field!");
            return;
        }
        else if (!comment)
        {
            alert("Please fill in comment field!");
            return;
        }
    } else
    {
        alert("Your name: " + name + "\n" + "Your email: " + mail + "\n" + "Your subject: " + subject + "\n" + "Your message: " + comment);
    }
}