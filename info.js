var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");
var info4 = document.getElementById("info4");
item1.addEventListener("click", function(){
    info1.innerHTML = "This is rx7 fd it has a rotory engine.";
    info2.innerHTML = "It has triangle shaped pistons.";
});
                       
item2.addEventListener("click", function(){
    info1.innerHTML = "It is a jz110 has a inline 6 with a turbo.";
    info2.innerHTML = "It does good burnouts .";
});
item3.addEventListener("click", function(){
    info1.innerHTML ="This  is my dream car the r34 skiline it is illeagle hear in america.";
    info2.innerHTML ="It has a inline 6 that is twin turbo.";
});
item4.addEventListener("click", function(){
    info1.innerHTML ="It is a nsx  has a 3.0 leter v6";
    info2.innerHTML ="It is a luxery car";
});