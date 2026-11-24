const booking = document.querySelector('#booking');
const selection = booking.querySelector('[data-selection]');

document.querySelectorAll('[data-book]').forEach(button => {
  button.addEventListener('click', () => {
    selection.textContent = button.dataset.book || 'Уточните услугу и время в студии.';
    booking.showModal();
  });
});

booking.querySelector('[data-close]').addEventListener('click', () => {
  booking.close();
});
