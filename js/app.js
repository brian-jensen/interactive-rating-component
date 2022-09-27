const maxStarsRating = 5;
const ratings = document.querySelector('.ratings-container');
const submit = document.querySelector('.submit');
const card = document.querySelector('.card');

submit.disabled = true;
submit.style.cursor = 'not-allowed';

for (let i = 1; i <= maxStarsRating; i++) {
  ratings.innerHTML += `<button data-index=${i}>${i}</button>`;
}

const numbers = ratings.querySelectorAll('button');

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    const active = document.querySelector('.active')
    if (active) active.classList.remove('active');
    const rating = Number(number.dataset.index);
    number.classList.toggle('active');
    submit.disabled = false;
    submit.style.cursor = 'pointer';
    handleSubmit(rating);
  });
});

const handleSubmit = (rating) => {
  submit.addEventListener('click', () => {
    card.innerHTML = `
      <img class="thanks-image" src="./images/illustration-thank-you.svg" alt="icon of a receipt printer">
      <div class="thanks-text">
        <div class="result-container">
          <p class="result">You selected ${rating} out of ${maxStarsRating}</p>
        </div>
        <h2>Thank you!</h2>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, 
          don't hesitate to get in touch!</p>
      </div>
    `;
    card.classList.add('reverse');
  });
}