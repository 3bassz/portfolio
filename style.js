document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if(targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  setTimeout(() => {
    alert('Thank you for your message! We will get back to you shortly.');
    contactForm.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  }, 1500);
});
