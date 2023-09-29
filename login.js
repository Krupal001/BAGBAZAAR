
function val()
{
    let uname = document.getElementById("uname").value; 
    let password = document.getElementById("pass").value; 
    
    if(uname=="aaa" && password == "aaa")
     {
        windows.location.replace("home.html");
        
     }
    else 
    {
        alert("username and password not matched");
    }
    

}
