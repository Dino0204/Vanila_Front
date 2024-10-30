//html
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//css
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);                       

}
//Hello + username 
function paintGreetings(username){
    greeting.innerText =  `Hello ${username}`; //백틱 : ` (~)
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//username 불러오기
const savedUsername = localStorage.getItem(USERNAME_KEY);

//만약 username === null이라면 로그인창 보이게함 , 아니라면 Hello + username
if(savedUsername === null ){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);

}else {
    paintGreetings(savedUsername);
}