const reviewForm = document.getElementById('reviewForm');
const reviewsContainer = document.getElementById('reviewsContainer');
const stars = document.querySelectorAll('.star-rating span');
let selectedRating = 5;

// Star hover effect
stars.forEach(star => {
  star.addEventListener('mouseover', () => {
    stars.forEach(s => s.classList.remove('hover'));
    for (let i = 0; i < star.dataset.value; i++) stars[i].classList.add('hover');
  });
  
  star.addEventListener('mouseout', () => {
    stars.forEach(s => s.classList.remove('hover'));
    for (let i = 0; i < selectedRating; i++) stars[i].classList.add('selected');
  });

  star.addEventListener('click', () => {
    selectedRating = star.dataset.value;
    stars.forEach(s => s.classList.remove('selected'));
    for (let i = 0; i < selectedRating; i++) stars[i].classList.add('selected');
  });
});

// Submit review
reviewForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const reviewText = document.getElementById('reviewText').value;

  const card = document.createElement('div');
  card.classList.add('review-card');
  card.innerHTML = `
    <p>${reviewText}</p>
    <p class="stars">${'★'.repeat(selectedRating)}${'☆'.repeat(5 - selectedRating)}</p>
    <h4>- ${name}</h4>
  `;
  
  reviewsContainer.prepend(card);
  setTimeout(() => card.classList.add('show'), 50); // animation effect

  reviewForm.reset();
  selectedRating = 5;
  stars.forEach(s => s.classList.remove('selected'));
  for (let i = 0; i < 5; i++) stars[i].classList.add('selected');
});
