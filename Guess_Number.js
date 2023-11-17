var numb =document.getElementById("number")
var ans =document.getElementById("answer")
var scr =document.getElementById("score")
var ts=10
var num=Math.floor(Math.random()*10)+1
console.log(num)
function check(){
       var enter = numb.value
    
        
    
       if (enter == num) {
           ans.textContent ="right"
           alert("you won")
           ts=ts+1
           scr.textContent="score :"+ ts
       }else{
           ts=ts-1
           scr.textContent= "score :"+ts
           ans.textContent ="wrong"
           
           
       }
}
var c =document.getElementById("color")
function dark(){
    c.style.backgroundColor="black"
    c.style.color="white"
}
function light(){
    c.style.backgroundColor="white"
    c.style.color="black"
             }
