var todo = document.getElementById('todolist');
var form = document.getElementById('myform');
var field = document.getElementById('newitem');
var Deleteall = document.getElementById('Deleteall')
    
// Adds the items
form.addEventListener( 'submit', function(evt) {
  var text = field.value;
  todo.innerHTML += '<div>' + text + '</div>';
  evt.preventDefault();
}, false);


// REmoves the items
todo.addEventListener( 'click', function(evt) {
  var tar = evt.target;
  tar.parentNode.removeChild(tar);
  evt.preventDefault();
}, false);

// REmoves the items
Deleteall.addEventListener( 'click', function(evt) {
  todo.innerHTML = ""
  evt.preventDefault();
}, false);
