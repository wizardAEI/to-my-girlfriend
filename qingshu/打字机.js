/**
 * 模仿打字机效果
 * author @AEI
 */

let str="我愿穷极一生，做一场有你的梦......<那时我们在太空漫步，月球上相爱，然后摘下氧气头盔，接吻死去。在太阳的光线和宇宙辐射下永恒，你的双眼像猫眼星系和玫瑰星云那样，承载了我的所有.......<于是我才想起来，原来那年的春风，并不是吹散了寒冬，而是我站在你的身后，春风便把你推向了我。"//利用<作为换行符
let strp="";
let i=0;
function print1()
{
    if(str[i]!='<')
    {
        strp+=str[i];
        document.getElementById("box1").innerHTML=strp+'|';
    }
    else
    {
        document.getElementById("box1").innerHTML=strp+"<br><br>"+'|';
        strp+="<br><br>";
    }
    i++;
}
function print2()
{
    setTimeout(()=>{document.getElementById("box1").innerHTML=strp+' ';},100);
    setTimeout(()=>{document.getElementById("box1").innerHTML=strp+'|';},630);
}
let printid=setInterval(() => {
    print1();
    if(i==str.length)
    clearInterval(printid);
},90);  
setTimeout(() => {
    id=setInterval(print2,1060);//注意setInterval内部直接写函数的时候是直接写函数名不加括号的。
},(str.length-1)*90);
//0.53秒闪一次