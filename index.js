function getFirstSelector(selector){
  return document.querySelector(selector);
}
function deepestChild(){
  var start=document.getElementById("grand-node");
  while(start.querySelector("div")!=null){
    start=start.querySelector("div");
  }
  return start;
}
function increaseRankBy(n){
  
}
