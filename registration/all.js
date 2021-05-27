var send = document.querySelector('.send');
send.addEventListener('click',signup,false);

function signup(){
    var emailStr = document.querySelector('.account').value;
    var passwordStr= document.querySelector('.password').value;
    var account={};
    account.email = emailStr;
    account.password= passwordStr;
 var xhr = new XMLHttpRequest ();
 xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup' ,true)  
xhr.setRequestHeader('Content-type','application/json');
var  data = JSON.stringify(account);
xhr.send(data); 
xhr.onload= function(){
    var callblackData= JSON.parse(xhr.responseText);
    var callsigup= callblackData.message;
    if (callsigup=="帳號註冊成功"){
        alert("帳號註冊成功")
    }
    else(
        alert(callsigup)
    );
} 
}  