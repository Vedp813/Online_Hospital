function regest(){

    var Email = document.getElementById('email').value;
    var Password = document.getElementById('pass').value;
    var option = document.getElementById('opt').value
    if(Email != "" && Password != ""){
        auth.createUserWithEmailAndPassword(Email , Password).then(response =>{
                window.location.href= "login-index.html"          
                    }).catch(e => alert(e.message));
        
}
    else{
        window.alert("Please fill out all details.");
    }
} 