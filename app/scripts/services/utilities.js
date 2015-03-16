//Quickly and painlessly gets cookies for controllers
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}

 //To catch Errors when trying to join while the server
        //Or backend is down
        function catchError(response){
            //Status 0 is when the server is not found
            if(response.status === 0){
                //Create a string with Response
                var responseString = "Response is: " + response.status;
                //Log our response status
                console.log(responseString);
                //Now alert it(Under master julian's request)
                alert("Server is not up! " + responseString);
            }
        }

//Function to check login cookie so we may display logout in header
function isLoggedIn(){
    if(getCookie("session_token")){
        return true;
    }
    else
    {
        return false;
    }
}

//Redirects to desired local url
function go (requrl){
        console.log("url switch for " + requrl);
        //Cannot use $location since it is a service itself
        //So we use location.href to reassign the location by /# plus the path
        location.href = "/#" + requrl;
}