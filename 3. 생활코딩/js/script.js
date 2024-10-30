const target = document.querySelector('body');
const alist = document.querySelectorAll('a');

const Links = {
    SetColor:function(color){
        // const i = 0;
        //     while(i < alist.length){
        //     alist[i].style.color = color;
        //     i = i + 1;
        // }
        $('a').css('color',color);
    }
}

const Body = {
    SetColor:function(color){
        // document.querySelector('body').style.color = color;
        $('body').css('color',color);
    },
    SetBackGroundColor:function(color){
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor',color);
    }

}

function nightDayHandler(self){
    if(self.value ==='Night'){
        Body.SetBackGroundColor('black');
        Body.SetColor('white');
        self.value = 'Day';

        Links.SetColor('white');
    }else{
        Body.SetBackGroundColor('white');
        Body.SetColor('Black');
        self.value = 'Night';

        Links.SetColor('black');
    }
}