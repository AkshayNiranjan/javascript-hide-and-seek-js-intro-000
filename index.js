function getFirstSelector(selector){
  return document.querySelector(selector);
}
function deepestChild(){
  start=document.getElementById("grand-node");
  while(start.querySelector("div")!=NULL){
    start=start.querySelector("div");
  }
  return start.innerHTML;
}
