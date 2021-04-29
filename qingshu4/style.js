function funclick()
{
    let x = document.createElement("audio");
    x.setAttribute("src", "./video/55.mp3");
    x.setAttribute("autoplay","autoplay");
    let yinyan=document.getElementById("yinyan");
    yinyan.setAttribute("style","opacity:0");
    setTimeout(function(){
        document.getElementById("fronclick").style.zIndex=-300;
        document.getElementById("box").style.opacity=1;
        document.getElementById("boxup").style.opacity=1;
    },1500);//让播放按钮消失了
    //yinyan.style.opacity=0;
}
function quitemengban()
{
      let mengban=document.getElementById("mengban");
      setTimeout(
          function()
          {
            mengban.style.opacity=0;
          }
      ,2000);
      
      setTimeout(
        function()
        {
            mengban.style.zIndex=-200;
        }  
        ,3000);
}
quitemengban();

let k={
    a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,n:13,o:14,p:15,q:16,r:17,s:18,t:19,u:20,v:21,w:22,x:23,y:24,z:25
} 
let a=[
    {name:"A",yin:55, str:"Abiding<br><br>永久<br><br>我喜欢你，不分日夜，我喜欢你，永永远远。<br><br>爱你不是两三天,每天都会喜欢你很多遍<br><br>去试试其他的键吧，那些都是关于你的声音"},
    {name:"B" ,yin:55, str:" "},
    {name:"C" ,yin:55, str:" "},
    {name:"D" ,yin:55, str:" "},
    {name:"E" ,yin:55, str:" "},
    {name:"F" ,yin:55, str:" "},
    {name:"G" ,yin:55, str:" "},
    {name:"H" ,yin:55, str:" "},
    {name:"I" ,yin:55, str:" "},
    {name:"J" ,yin:55, str:" "},
    {name:"K" ,yin:55, str:" "},
    {name:"L" ,yin:55, str:" "},
    {name:"M" ,yin:55, str:" "},
    {name:"N" ,yin:55, str:" "},
    {name:"O" ,yin:55, str:" "},
    {name:"P" ,yin:55, str:" "},
    {name:"Q" ,yin:55, str:" "},
    {name:"R" ,yin:55, str:" "},
    {name:"S" ,yin:55, str:" "},
    {name:"T" ,yin:55, str:" "},
    {name:"U" ,yin:55, str:" "},
    {name:"V" ,yin:55, str:" "},
    {name:"W" ,yin:55, str:" "},
    {name:"X" ,yin:55, str:" "},
    {name:"Y" ,yin:55, str:" "},
    {name:"Z" ,yin:55, str:" "}
];
function fl(e)
{
    let key =e.key;
    if(key<='z'&&key>='a')
    {
        let p=a[k[key]];
        console.log(p);
        let x = document.createElement("audio");
        x.setAttribute("src", `./video/${p.yin}.mp3`);
        x.setAttribute("autoplay","autoplay");
        let box=document.getElementById("box");
        let boxl=document.getElementById("boxl");
        let boxr=document.getElementById("boxr");
        let boxup=document.getElementById("boxup");
        box.style.transition="0.5s";
        box.style.opacity=0;
        boxup.style.opacity=0;
        setTimeout(function()
        {
        boxl.innerHTML=`${p.name}`;
        boxr.innerHTML=`${p.str}`;
        box.style.opacity=1;
        boxup.style.opacity=1;  
        },500);
    }
    else
    {
        alert("你好像没有按小写字母哦");
    }
}
