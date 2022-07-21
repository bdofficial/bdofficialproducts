//check if "user" is in localStorage

if (localStorage["user"])
{
    var user = localStorage["user"] ;
    document.getElementById("user").value = user ;
}
else
{
    document.getElementById("user").placeholder = " " ;
    console.log("user no found in localStorage")
}

//save entered gmail address
document.getElementById("save").addEventListener("click", function ()
    {
        var user = document.getElementById("user").value ;
        //localStorage["user"] = user ;
        localStorage.setItem("user", user) ;
        console.log("gmail id saved")
    } , false);
