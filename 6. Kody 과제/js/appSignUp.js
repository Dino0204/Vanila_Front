let UserData = document.userdata;
// 유저의 이름 ,이메일 ,비밀번호를 저장
function SaveUserData(){
    let UserName = UserData.username.value;
    let UserEmail = UserData.userEmail.value;
    let UserPwd = UserData.userPwd.value;

    localStorage.setItem('Name', JSON.stringify(UserName));
    localStorage.setItem('Email', JSON.stringify(UserEmail));
    localStorage.setItem('PassWord', JSON.stringify(UserPwd));
    if(If_Account() === true){
        setTimeout(function(){ window.location.replace('Login.html')}, 100);
    }
}

// 저장한 계정이 있는지 확인
function If_Account(){
    let Name = localStorage.getItem('Name');
    let Email = localStorage.getItem('Email');
    let PassWord = localStorage.getItem('PassWord');

    if(Name !== ''&&Email !== ''&&PassWord !== ''){
        return true;
    }else{
        return false;
    }
}