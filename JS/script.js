var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function category(){
    let element = document.getElementById('toggle');
    element.classList.toggle('cate');
}

let xmark = document.getElementById('xmark');
let menu = document.getElementById('menu');
let icon = document.getElementById('menu-icon');

xmark.addEventListener('click',(e)=>{
  menu.style.width = '0%';
  menu.style.visibility = 'hidden';
})

  icon.addEventListener('click',()=>{
    menu.style.width = '70%';
    menu.style.visibility = 'visible';

  })
