const reviewForm = document.getElementById('reviewForm');
const reviewsContainer = document.getElementById('reviewsContainer');
const stars = document.querySelectorAll('.star-rating span');

let selectedRating = 5;

// STAR EFFECTS
stars.forEach(star => {

  star.addEventListener('mouseover', () => {
    stars.forEach(s => s.classList.remove('hover'));
    for (let i = 0; i < star.dataset.value; i++) {
      stars[i].classList.add('hover');
    }
  });

  star.addEventListener('mouseout', () => {
    stars.forEach(s => s.classList.remove('hover'));
    for (let i = 0; i < selectedRating; i++) {
      stars[i].classList.add('selected');
    }
  });

  star.addEventListener('click', () => {
    selectedRating = star.dataset.value;
    stars.forEach(s => s.classList.remove('selected'));

    for (let i = 0; i < selectedRating; i++) {
      stars[i].classList.add('selected');
    }
  });
});

// SUBMIT REVIEW
reviewForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const mobile = document.getElementById('mobile').value;   // saved privately
  const reviewText = document.getElementById('reviewText').value;

  db.collection("reviews").add({
    name: name,
    mobile: mobile, // saved to database but not shown
    text: reviewText,
    rating: selectedRating,
    date: new Date()
  }).then(() => {
    alert("Thank you! Your review has been submitted.");
    reviewForm.reset();

    selectedRating = 5;
    stars.forEach(s => s.classList.remove('selected'));
    for (let i = 0; i < 5; i++) stars[i].classList.add('selected');
  });
});

// LOAD ALL REVIEWS
db.collection("reviews")
  .orderBy("date", "desc")
  .onSnapshot(snapshot => {
    reviewsContainer.innerHTML = "";

    snapshot.forEach(doc => {
      const r = doc.data();

      const card = document.createElement('div');
      card.classList.add('review-card');

      card.innerHTML = `
        <p>${r.text}</p>
        <p class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</p>
        <h4>- ${r.name}</h4>
      `;

      reviewsContainer.appendChild(card);
      setTimeout(() => card.classList.add('show'), 50);
    });
  });
