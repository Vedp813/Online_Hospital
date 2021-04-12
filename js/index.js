function login(){

    var Email = document.getElementById('email').value;
    var Password = document.getElementById('pass').value;
    if(Email != "" && Password != ""){
        auth.signInWithEmailAndPassword(Email , Password).then(response =>{
            window.location.href= "option-index.html"
        }).catch(e => alert(e.message));
        
}
    else{
        window.alert("Please fill out all details.");
    }
} 
 