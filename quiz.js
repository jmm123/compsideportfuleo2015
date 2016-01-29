var question1 = document.getElementById("question1")
var question2 = document.getElementById("question2")
var question3 = document.getElementById("question3")
var q1 = document.getElementById("q1")
var q2 = document.getElementById("q2")
var q3 = document.getElementById("q3")
var turnin = document.getElementById("turnin")


var ans1996 = document.getElementById("ans1996");
var ans2003 = document.getElementById("ans2003")
var ans2rotor = document.getElementById("ans2rotor")

turnin.addEventListener("click" , function(){
        question1.style.backgroundColor = "red";
        question2.style.backgroundColor = "red";
        question3.style.backgroundColor = "red";
    if(ans2rotor.checked){
        question1.style.backgroundColor = "green"
    }
    if(ans1996.checked){
      
      question2.style.backgroundColor = "green";
    }
    if(ans2003.checked){
        question3.style.backgroundColor = "green"
    }
    
    
})