const Email = document.querySelector("#Email");
const Password = document.querySelector("#Password");
const SignUp = document.querySelector(".SignUpForm");

const SignUpEvent = function(){
    console.log(Email.value);
    console.log(Password.value);
} 

SignUp.addEventListener("click", (event)=>{
    SignUpEvent();
})

fetch("",)

async function logJSONData() {
    const response = await fetch("https://open.neis.go.kr/hub/mealServiceDietInfo");
    const jsonData = await response.json();
    console.log(jsonData);
}

