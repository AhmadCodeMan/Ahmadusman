
const mobileMenu = document.querySelector('.mobile-menu')
function toggleMenu(){
  if (mobileMenu.style.display == 'flex'){
    mobileMenu.style.display = 'none'
  }else{
    mobileMenu.style.display = 'flex'
  }
}


// Function to animate skill bars when scrolled into view
function animateSkills() {
  const skills = document.querySelectorAll('.skill-progress');
  const windowHeight = window.innerHeight;

  skills.forEach(skill => {
    const skillPosition = skill.getBoundingClientRect().top;

    if (skillPosition < windowHeight) {
      const skillProgress = skill.getAttribute('data-progress');
      skill.style.width = skillProgress;
    }
  });
}

// Event listener for scrolling to trigger animation
window.addEventListener('scroll', animateSkills);

// Initial check on page load
animateSkills();

function  toggleContent(contentId){
  var styleElement = document.getElementById(contentId)
  if (styleElement.style.display === 'none' || styleElement.style.display === ''){
    styleElement.style.display = 'flex'
    styleElement.classList.add('slide')
  }else{
    styleElement.style.display = 'none'
  }
  
}

