const loginForm = document.getElementById('loginForm');

function inputValueChange(){
    const nameU = document.getElementById('name').value;
    const pwd = document.getElementById('password').value;
    console.log(nameU);
    console.log(pwd);
}

loginForm.addEventListener("submit",(event)=>{
    const nameU = document.getElementById('name').value;
    const pwd = document.getElementById('password').value;
    if(nameU !== '' && pwd !== ''){
        fetch(`http://localhost:3001/user`,{
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                name: nameU,
                password: pwd
            })
        })
        .then(response=>response.json())
        .then(console.log(json))
    }else{
        event.preventDefault();
        alert('값을 입력하지 않았습니다!');
    }
}
);



fetch(`http://localhost:3001/user`,{
    method: "GET",
}
)
.then((res) => {
    return res.json(); //Promise 반환
})
.then((json) => {
    console.log(json); // 서버에서 주는 json데이터가 출력 됨
    console.log(json[0]); // 특정 id만 출력
    console.log(json.length); // 길이출력
});


