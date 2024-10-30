const Hi = document.getElementById('title');
let Name = JSON.parse(localStorage.getItem('Name'));

const Job = document.getElementById('job');
let Check = JSON.parse(localStorage.getItem('CheckBox'));

// 이름에 Hi 표시
if(Name !== null){
    Hi.innerText = 'Hi ' + Name + '!';
}

// 체크박스의 체크여부에 따라 학생 또는 일반인 표시
if(Check === true){
    Job.innerText = 'Std';
}else if(Check === false){
    Job.innerText = 'Normal';
}
