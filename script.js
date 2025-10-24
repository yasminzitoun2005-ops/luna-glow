document.getElementById('menuBtn').addEventListener('click', function() {
  document.getElementById('navMenu').classList.toggle('show');
});

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting Luna Glow! We will get back to you soon.');
    form.reset();
  });
}
