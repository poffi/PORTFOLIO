const hero = document.querySelector('[data-hero]')

window.addEventListener('mousemove', (e) => {
	const { clientX, clientY } = e
  const x = Math.round((clientX / window.innerWidth) * 100)
  const y = Math.round((clientY / window.innerHeight) * 100)
	
	gsap.to(hero, {
    '--x': `${x}%`,
    '--y': `${y}%`,
    duration: 0.3,
    ease: 'sine.out',
  })
}) 




function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


var angle = 0;
function galleryspin(sign) {
  spinner = document.querySelector("#spinner");
  if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
  spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
}