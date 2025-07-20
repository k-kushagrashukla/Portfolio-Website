let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

function openModal() {
  document.getElementById("hireModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("hireModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("hireModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
