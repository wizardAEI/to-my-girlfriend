let txt=[" 我甚至不知道你的名字，可那天的🌙月亮真美......你也是。<br>所以，告别的那一刻，我便永远喜欢了你。","我知道我喜欢上你,可能只需要一秒钟<br>可是我喜欢你，可以用一辈子。","都说梦里总是虚幻的，可是.....梦到的你却那么真实。","后来，每一次见你的时候，湖南姑娘总那么温柔。","于是，我多想把我梦里的作的诗念给你听....","可那么梦醒时分，偏偏又见到你<br>我只好醉倒在细雨与花丛中","...你是我辗转反侧的梦<br>你是我坠入人间的星辰","声旁有佳女，弱冠不自知<br>小生虽不才，愿与度日月","日日月月..."];
let txti=0;
let degree=157;
function sun()
{
    document.getElementById("cloud").style.transform="scale(2.6,2) translateX(50vw)";
    let lis=document.getElementsByClassName('box1');
    for (let i=0;i<lis.length;i++) {
        lis[i].style.transform=`rotate(${degree}deg)`;
        degree+=200;
        }
        let lis2=document.getElementsByClassName('box0');
        for (let i=0;i<lis2.length;i++) {
        lis2[i].style.backgroundColor='#02475e';
        }
    document.getElementById("star").style.opacity=1;
    document.getElementById("star2").style.opacity=1;
    document.getElementById("star3").style.opacity=1;
    document.getElementById("star4").style.opacity=1;
    document.getElementById("star5").style.opacity=1;
    let daytxt=document.getElementById("daytxt");
    daytxt.style.opacity=0;
    setTimeout(function(){
    if(txti<txt.length)
        {
        daytxt.innerHTML=`${txt[txti]}`;
        txti++;
        }
    else
        daytxt.innerHTML=`${txt[txti-1]}`;
    daytxt.style.color="#28b5b5b3";
    daytxt.style.opacity=1;
    },1500);
    setTimeout(function(){
    document.getElementById("star").style.transform="translate(-100vw,100vh)";
    document.getElementById("star2").style.transform="translate(-100vw,100vh)";
    },2500);
}
//这里点击月亮，获取它转的度数，实现让他转一圈相当于回去
function moon()
{
    document.getElementById("cloud").style.transform="scale(2.6,2) translateX(0vw)";
    document.getElementById("star").style.opacity=0;
    document.getElementById("star2").style.opacity=0;
    document.getElementById("star3").style.opacity=0;
    document.getElementById("star4").style.opacity=0;
    document.getElementById("star5").style.opacity=0;
    let lis=document.getElementsByClassName('box1');
    for (let i=0;i<lis.length;i++) {
        lis[i].style.transform=`rotate(${degree}deg)`;
        degree+=160;
        }
        let lis2=document.getElementsByClassName('box0');
        for (let i=0;i<lis2.length;i++) {
            lis2[i].style.backgroundColor='#fefecce6';
        }
        let daytxt=document.getElementById("daytxt");
        daytxt.style.opacity=0;
        setTimeout(function(){   
        if(txti<txt.length)
            {
            daytxt.innerHTML=`${txt[txti]}`;
            txti++;
            }
        else
            daytxt.innerHTML=`${txt[txti-1]}`;
        daytxt.style.color="#393e46b3";
        daytxt.style.opacity=1;
        },1500);
        setTimeout(function(){
            document.getElementById("star").style.transform="translate(0vw,0vh)";
            document.getElementById("star2").style.transform="translate(0vw,0vh)";
            },1500);
}