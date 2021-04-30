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
        ,4500);
}
quitemengban();

let k={
    a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,n:13,o:14,p:15,q:16,r:17,s:18,t:19,u:20,v:21,w:22,x:23,y:24,z:25,
    A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25
} 
let a=[
    {name:"A",yin:55, str:"Abiding<br><br>我喜欢你，不分日夜，我喜欢你，永永远远。<br><br>爱你不是两三天,每天都会喜欢你很多遍。<br><br>也去试试其他的键吧，那些都是关于你的声音。又或者，找一下声音里关于你的线索。"},
    {name:"B" ,yin:55, str:""},
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
let b=["linear-gradient(25deg, #c3786f, #a99188, #84a7a1, #3bbcbb)",
"linear-gradient(25deg, #cb5860, #b3876f, #90ad7f, #4acf8f)",
"linear-gradient(25deg, #e473a3, #d294aa, #bbb0b1, #9ccab8)",
"linear-gradient(25deg, #452089, #505ca1, #4b94b8, #24cdcf)",
"linear-gradient(25deg, #04245a, #652959, #a62557, #e60b55)",
"linear-gradient(25deg, #88a0ff, #b6bedd, #d6deb9, #eeff91)",
"linear-gradient(25deg, #3e1c59, #53646f, #53ad83, #27fb95)",
"linear-gradient(25deg, #590146, #634264, #647184, #56a1a5)",
"linear-gradient(25deg, #694afc, #a26dfd, #d091fe, #f9b7fe)",
"linear-gradient(25deg, #412285, #4c599c, #488eb3, #29c4c9)",
"linear-gradient(25deg, #003876, #1f6889, #239b9a, #00d1ab)",
"linear-gradient(25deg, #db6679, #b9907b, #8bb17e, #29ce80)",
"linear-gradient(25deg, #060d37, #174161, #1d7a8d, #12b8bc)",
"linear-gradient(25deg, #fcb9b5, #fed0ad, #ffe7a5, #fffd9b)",
"linear-gradient(25deg, #0f4660, #6b486c, #ac3f78, #ec1384)",
"linear-gradient(25deg, #094189, #7f566b, #bd6d49, #f78707)",
"linear-gradient(43deg, #00a08c, #7db19d, #c1c0af, #ffcec1)",
"linear-gradient(35deg, #526fbf, #8c98d0, #bfc3e0, #f0f0f0)",
"linear-gradient(25deg, #d03e9b, #d2788a, #cfa676, #c6d05c)",
"linear-gradient(25deg, #8fd647, #a0d187, #a8ccbf, #a8c7f7)",
"linear-gradient(25deg, #e45579, #c59280, #96bf87, #19e88e)",
"linear-gradient(25deg, #d575db, #b29db2, #83bb87, #00d456)",
"linear-gradient(25deg, #d929f7, #e67cc5, #e5b38f, #d8e549)",
"linear-gradient(25deg, #fd390b, #e1765b, #b19fa1, #1ec1e9)",
"linear-gradient(25deg, #7b7bd4, #759cbc, #62bca2, #30db85)",
"linear-gradient(25deg, #d6007b, #b8509e, #8a71c2, #0b8be8)"];
let s='a';
function fl(e)
{
    let key =e.key;
    console.log(key);
    if((key<='z'&&key>='a')||(key<='Z'&&key>='A'))
    {
        let p=a[k[key]];
        s=s+p.name;
        console.log(p);
        console.log(s);
        if(s.indexOf("XIAOLUXIAOLUWXHN")!=-1)
        {
            setTimeout(alert("aaaa"),1000);
            
        }
        let x = document.createElement("audio");
        x.setAttribute("src", `./video/${p.yin}.mp3`);
        x.setAttribute("autoplay","autoplay");
        let box=document.getElementById("box");
        let boxl=document.getElementById("boxl");
        let boxr=document.getElementById("boxr");
        let boxup=document.getElementById("boxup");
        let bac=document.getElementById("bac");
        bac.style.opacity=0;
        box.style.transition="0.5s";
        box.style.opacity=0;
        boxup.style.opacity=0;
        setTimeout(function()
        {
        boxl.innerHTML=`${p.name}`;
        boxr.innerHTML=`${p.str}`;
        console.log(b[k[key]]);
        bac.style.background=`${b[k[key]]}`;
        box.style.opacity=1;
        boxup.style.opacity=1;  
        bac.style.opacity=1;
        },500);
    }
}