let degree=180;
function sun()
{
    let lis=document.getElementsByClassName('box1');
    for (let i=0;i<lis.length;i++) {
        lis[i].style.transform=`rotate(${degree}deg)`;
        }
    let lis2=document.getElementsByClassName('box0');
    for (let i=0;i<lis2.length;i++) {
        lis2[i].style.backgroundColor='cornflowerblue';
        degree+=180;
        }
}
//这里点击月亮，获取它转的度数，实现让他转一圈相当于回去
function moon()
{
    let lis=document.getElementsByClassName('box1');
    for (let i=0;i<lis.length;i++) {
        lis[i].style.transform=`rotate(${degree}deg)`;
        degree+=180;
        }
    let lis2=document.getElementsByClassName('box0');
    for (let i=0;i<lis2.length;i++) {
        lis2[i].style.backgroundColor='#02475e';
        }
}