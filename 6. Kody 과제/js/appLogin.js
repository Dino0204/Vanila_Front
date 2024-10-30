let UserData = document.userdata;

// 경고를 할건지 , 다음 창으로 넘어갈건지 정함
function CheckUserData() {
    if(isUser()===true){
        return true;
    }else{
        alertUser();
        return false;
    }
}

// 이름 , 이메일, 비번이 전부 있는지 확인 후 체크여부 가림 
function isUser(){
    let Name = JSON.parse(localStorage.getItem('Name'));
    let Email = JSON.parse(localStorage.getItem('Email'));
    let PassWord = JSON.parse(localStorage.getItem('PassWord'));

    let checkbox = document.getElementById('student');
    localStorage.setItem('CheckBox',checkbox.checked);
    
    if(UserData.username.value === Name && UserData.userEmail.value === Email && UserData.userPwd.value === PassWord){
        let CheckStudent = checkbox.checked; 
        if(CheckStudent){
            alert('학생!');
        }else{
            alert('일반인!');
        }
        return true;

    }else{
    
        return false;
    }
}

// 유저에게 값이 잘못되었다고 경고
function alertUser() {
    let $form = document.querySelector('form');
    $form.addEventListener("submit", (event) => {
        if(isUser()===false){
            event.preventDefault(); // 이벤트를 실행하지 못하게 막는 메서드
            alert('이름, 이메일, 비밀번호중 하나이상이 잘못되었습니다.');
        }

    });
}


