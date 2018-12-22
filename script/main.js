
function showMenu()
{
    document.getElementById("menu").style.left = "0";
}

function hideMenu()
{
    document.getElementById("menu").style.left = "-100vw";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("up").style.display = "block";
  } else {
    document.getElementById("up").style.display = "none";
  }
}


function subir() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}