var elem=document.querySelector(".horizontal-nav:nth-child(2) > .sub:first-child");
if(elem)
{
  elem.addEventListener("mousemove",function(){
    document.documentElement.classList.add("nav-hover");
  });
  elem.addEventListener("mouseout",function(){
    document.documentElement.classList.remove("nav-hover");
  });
}