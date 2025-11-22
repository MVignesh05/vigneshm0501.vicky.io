// Toggle mobile nav
function toggleMenu(){
  const nav = document.getElementById('navMenu');
  if(!nav) return;
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// fill current year
document.getElementById('year').textContent = new Date().getFullYear();
function toggleReadMore(btn) {
  const moreText = btn.previousElementSibling;
  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    btn.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.textContent = "Read More";
  }
}

// Smooth scroll for anchor links (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const target = document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      // hide mobile nav after clicking
      const nav = document.getElementById('navMenu');
      if(window.innerWidth < 980 && nav) nav.style.display = 'none';
    }
  });
});
