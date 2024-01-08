const form = document.querySelector('form');
const submitMessage = document.getElementById('submitMes');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  
  submitMessage.innerHTML = "Thank you for your message! We'll get back to you soon.";
  
  form.reset();
});
