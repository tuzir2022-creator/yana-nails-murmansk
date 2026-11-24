const booking = document.querySelector('[data-studio-booking]');
const output = booking.querySelector('[data-price-output]');
const format = new Intl.NumberFormat('ru-RU');

output.setAttribute('aria-live', 'polite');
booking.addEventListener('change', event => {
  if (event.target.name === 'svc') {
    const price = event.target.dataset.price;
    output.textContent = /^\d+$/.test(price) ? format.format(Number(price)) + ' ₽' : price;
  }
});
