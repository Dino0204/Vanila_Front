function btn1(){
    let btn1 = document.getElementById("btn1");
    btn1.addEventListener("click",rcp(1));
}

function btn2(){
    let btn2 = document.getElementById("btn2");
    btn2.addEventListener("click",rcp(2));
}

function btn3(){
    let btn3 = document.getElementById("btn3");
    btn3.addEventListener("click",rcp(3));
}

let money = 1000;
function paintCost(){
    if(money > 0){
        money = localStorage.getItem("money");
    }
}

function rcp(user){ 
    let p = document.getElementById("paintRandom");
    let indi = document.getElementById("indicator");
    let Random = Math.floor(Math.random()*3+1);
    
    if(user===Random){
        indi.innerText = "비김";
    }else if(user===1&&Random===2||user===2&&Random===3||user===3&&Random===1){
        indi.innerText = "짐";
        money -=200;
        cost(money);
    }else{
        indi.innerText = "이김";
        money +=300;
        cost(money);
    }
    
    if(Random===1){
        p.innerText = '상대는 가위';
        
    }else if(Random===2){
        p.innerText = '상대는 바위';
    }else{
        p.innerText = '상대는 보';
    }
    
    
}

function cost(money){
    let cost = document.getElementById("cost");
        localStorage.setItem("money",money);
        cost.innerText = 'cost : '+money;
    

}