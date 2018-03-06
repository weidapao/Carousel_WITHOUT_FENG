var n;
//初始化
init();
var timerX=setInterval(()=>{
  $(`.images img:nth-child(${checkN(n)})`).removeClass('current stay').addClass("leave")
  $(`.images img:nth-child(${checkN(n)%3+1})`).removeClass('leave stay').addClass("current")
  $(`.images img:nth-child(${checkN(n)})`).one('transitionend',(e)=>{
    $(e.currentTarget).removeClass('leave current').addClass("stay");
  }
  )
  n++;
},3000)


//初始化函数
function init(){
  n = 1
  $(`.images > img:nth-child(${n})`).addClass('current')
    .siblings().addClass('stay')
}
//处理n的函数
function checkN(num){
  if(num>3){
    num=num%3;
  }
  if(num===0){
    num=3;
  }
  return num;
}