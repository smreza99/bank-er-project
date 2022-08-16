document.getElementById('submit-btn').addEventListener('click', function(){
  const  emailfield = document.getElementById('email');
    const email = emailfield.value;
   
    const passwordfield = document.getElementById('password');
    const password = passwordfield.value;
    
    if( email === 'sontan@bap.com' && password === 'santo' ){
        window.location.href = 'bank.html';
    }
    else{
        alert('your password is wrong');
    }
})