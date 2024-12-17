const modals = document.querySelectorAll('.modal');
const modalBtns = document.querySelectorAll('.modal-btn');
const closeBtns = document.querySelectorAll('.close-btn');

modalBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const target = btn.getAttribute('data-target');
    document.getElementById(target).style.display = 'block';
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    document.getElementById(target).style.display = 'none';
  });
});

window.addEventListener('click', (e) => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
