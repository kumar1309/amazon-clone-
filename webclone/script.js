const imgs=document.querySelectorAll(".header-slider ul");
const prev=document.querySelectorAll(".prev-icon");
const next=document.querySelectorAll(".next-icon");
let n=0;
function changeSlide()
{
    for(let i=0;i<imgs.length;i++)
    {
        imgs[i].style.display="none";
    }
    imgs[n].style.display="block";

}
changeSlide();
    