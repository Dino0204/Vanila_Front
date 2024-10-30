let today = new Date();   
const year = today.getFullYear(); // 년도
const month = (today.getMonth() + 1).toString().padStart(2, '0');  // 월
const day = today.getDate().toString().padStart(2, '0');  // 일
let date = (`${year}${month}${day}`); // yyyymmdd

let newMonth = today.getMonth()+1;
let newDay = today.getDate();
let nowday = today.getDay();


const VcCode = '9cde42a440814d009aa596c3e097e2a1';
const CityCode = 'F10';
const RegularCode = '7380292';

const divDiet = document.querySelector('.diet');
const divTime = document.querySelector('.time');
const topBar = document.querySelector('.topbar');
const div1 = document.querySelector('.d1');

let divDish;
let DishH2;
let DishDiv;
let yoil;
let len = 3;
let last = new Date(year, month, 0).getDate();

// 일요일은 0, 월요일은 1, 화요일은 2, 수요일은 3, 목요일은 4, 금요일은 5, 토요일은 6 을 반환

let SchoolName;
let ArrDish = [];
let DishName;
let DishWhen;
let ConvertDishName;

function RightBtn(){
    newDay = Number(newDay);    
    newMonth = Number(newMonth);

    if(newDay<last){
        if(nowday>=1 && nowday <=4){
            nowday +=1;
            newDay +=1;
        }else{
            nowday = 1;
            newDay +=3;
        }
    }else{
        newMonth+=1;
        last = new Date(year, newMonth, 0).getDate();
        newDay = 1;
        if(!(nowday>=1 && nowday <=4)){
            nowday = 1;
            newDay +=2;
        }
    }
    newDay = newDay.toString().padStart(2, '0');
    newMonth = newMonth.toString().padStart(2, '0'); 
    date = (`${year}${newMonth}${newDay}`);

    fetchData();
    nextDay(); 
    // console.log(newDay,'/',typeof(newDay),'/',date);
}

function LeftBtn(){
    newDay = Number(newDay);    
    newMonth = Number(newMonth);

    if(newDay>1){
        if(nowday>=2 && nowday <=5){
            nowday -=1;
            newDay -=1;
        }else{
            nowday = 5;
            newDay-=3;
        }
    }else{
        newMonth-=1; 
        last = new Date(year, newMonth, 0).getDate();
        newDay = last - newDay+1;
        
        if(!(nowday>=2 && nowday <=5)){
            nowday = 5;
            newDay -=2;
        }
    }
    newDay = newDay.toString().padStart(2, '0'); 
    newMonth = newMonth.toString().padStart(2, '0'); 
    date = (`${year}${newMonth}${newDay}`);

    fetchData();
    nextDay(); 
    // console.log(newDay,'/',typeof(newDay),'/',date);
}

function nextDay(){
    //console.log(ArrDish[0]);
    if(nowday===1){yoil="월"}
    else if(nowday===2){yoil="화"}
    else if(nowday===3){yoil="수"}
    else if(nowday===4){yoil="목"}
    else if(nowday===5){yoil="금"}
    
    divTime.innerText = `${year}/${newMonth}/${newDay}/${yoil}`;
    for(let i=0;i<3;i++){
        divDish = document.querySelector(`.d${i}`);
        DishH2 = divDish.querySelector('h2');
        DishDiv = divDish.querySelector('div');

        DishH2.innerText = ArrDish[i][0];
        DishDiv.innerText = ArrDish[i][1];
        
        if(ArrDish[i][0] === ''){
            divDish.classList.add('hidden');
        }else{
            divDish.classList.remove('hidden');
        }
        
        ArrDish[i][0] = '';
        ArrDish[i][1] = '';
    }
}

async function fetchData() {
    try {
        console.log('loading fetch...');
        let response = await fetch(`https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=${CityCode}&SD_SCHUL_CODE=${RegularCode}&KEY=${VcCode}&MLSV_YMD=${date}&TYPE=JSON`);
        let data = [await response.json()];   
        divDish = document.querySelector(`.d2`);
        
        if(nowday>=0&&nowday<=4){
            len = 3;
        }else if(nowday===5){
            len = 2;
        }else{
            len = 0;
        }


        if(len>0){
            for(let i = 0 ; i < len; i++){
                DishWhen = data[0].mealServiceDietInfo[1].row[i].MMEAL_SC_NM;
                DishName = data[0].mealServiceDietInfo[1].row[i].DDISH_NM;
                ConvertDishName = DishName.replace(/<br\/?>/g, '\n')
                
                ArrDish[i] = [
                    DishWhen, 
                    ConvertDishName
                ] 
            }
            nextDay();
        }
    } catch (error) {   
        // console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
        console.log('급식정보가 없습니다.');    
    }
}
fetchData();



