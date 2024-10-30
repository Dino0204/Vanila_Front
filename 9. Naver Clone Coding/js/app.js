const btn = document.querySelector('.btn-select');
const list = document.querySelector('.list-member');
btn.addEventListener('click', () => {btn.classList.toggle('on');});


list.addEventListener('click', (event) => {
    if (event.target.nodeName === "BUTTON") {
        btn.innerText = event.target.innerText;
        let lang = event.target.id;
        const signIn = document.querySelector('#Signin');
        const name = document.querySelector('#name');
        const passwd = document.querySelector('#password');

        if(lang === 'kor'){
            signIn.innerText = "로그인";
            name.placeholder = '아이디';
            passwd.placeholder = '비밀번호';
        }
        else if(lang === 'eng'){
            signIn.innerText = "Sign in";
            name.placeholder = 'ID';
            passwd.placeholder = 'Password';
        }
        else if(lang === 'gan'){
            signIn.innerText = "登入";
            name.placeholder = 'ID';
            passwd.placeholder = '密码';
        }
        else if(lang === 'bun'){
            signIn.innerText = "登录";
            name.placeholder = 'ID';
            passwd.placeholder = '密碼';
        }
        
        console.log(event.target.id);
        btn.classList.remove('on');
    }
});