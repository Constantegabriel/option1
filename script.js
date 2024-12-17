const modal = document.getElementById('modal');
const modalBtns = document.querySelectorAll('.modal-btn');
const closeBtn = document.querySelector('.close-btn');

modalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
