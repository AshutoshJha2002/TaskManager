
  var signemail=[];
  var signpass=[];

function signup(){

   let error=false;
    let email = document.querySelector('#email').value
    let password= document.querySelector('#password').value

    

    console.log(email)

    let emailPattern = /^[a-z]+[a-z0-9\._]{3,}@[a-z]{3,10}\.[a-z\.]{2,8}$/
    if(email === "" || email === null){
        alert("Please enter your Email")
        
        error=true
    }else if(!email.match(emailPattern)){
        alert("Please enter a valid Email")
        error=true
       
    }
    else{
        document.querySelector('#emailError').innerHTML=""
        error=false
       
     
    }


    let validPassword=true
    let passError = ""
    if(!password.match(/[a-z]/)){
        passError += "\<br>Password should contain atleast one lowercase character"
        validPassword=false
    }
    if(!password.match(/[A-Z]/)){
        passError += "\<br>Password should contain atleast one uppercase character"
        validPassword=false
    }
    if(!password.match(/[0-9]/)){
        passError += "\<br>Password should contain atleast one number"
        validPassword=false
    }
    if(!password.match(/[!@#$%^&*_()]/)){
        passError += "\<br>Password should contain atleast one special character"
        validPassword=false
    }
    if(password.length < 8 || password.length > 16){
        passError += "\<br>Password must be 8-16 char long"
        validPassword=false
    }
    if(!validPassword){
        alert(passError);
      
        
    }else{

        validPassword=true
    }
   
    
   if(!error  && validPassword)
   {
    alert(" submitted successfully.");
    signemail.push(email);
    signpass.push(password)
   }
}

function signin()
{
    let email = document.querySelector('#email').value
    let password= document.querySelector('#password').value
    var c=0;
    for(let i=0;i<signemail.length;i++)
    {
        if(signemail[i]===email && signpass[i]===password)
        {
            alert("signin successfull")
            c=c+1;
            window.location.href="taskmanagement.html"
            break;
        }

    }
    if(c==0)
    { 
        alert("invalid credential")

    }



}

function show()
{
   const  eye=document.getElementById('i');
   const password=document.getElementById('password');
   if(eye.className=='fa-solid fa-eye')
   {
    password.type='password';
    eye.className='fa-solid fa-eye-slash';
    
   }
   else{
    password.type='text';
    eye.className='fa-solid fa-eye';
   }
}