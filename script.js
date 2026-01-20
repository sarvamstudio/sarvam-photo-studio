const reviewForm = document.getElementById('reviewForm');
const reviewsContainer = document.getElementById('reviewsContainer');
const stars = document.querySelectorAll('.star-rating span');

let selectedRating = 5;

/* STAR INTERACTION */
stars.forEach((star, index) => {

  star.addEventListener('mouseover', () => {
    stars.forEach(s => s.classList.remove('hover'));
    for (let i = 0; i <= index; i++) {
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
    selectedRating = index + 1;
    stars.forEach(s => s.classList.remove('selected'));
    for (let i = 0; i < selectedRating; i++) {
      stars[i].classList.add('selected');
    }
  });
});

/* SUBMIT REVIEW */
reviewForm.addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const mobile = document.getElementById('mobile').value;
  const reviewText = document.getElementById('reviewText').value;

  db.collection("reviews").add({
    name,
    mobile,
    text: reviewText,
    rating: selectedRating,
    date: new Date()
  }).then(() => {
    alert("🙏 Thank you for your review!");
    reviewForm.reset();

    selectedRating = 5;
    stars.forEach(s => s.classList.remove('selected'));
    for (let i = 0; i < 5; i++) stars[i].classList.add('selected');
  });
});

/* LOAD REVIEWS */
db.collection("reviews")
  .orderBy("date", "desc")
  .onSnapshot(snapshot => {
    reviewsContainer.innerHTML = "";

    snapshot.forEach(doc => {
      const r = doc.data();
      const card = document.createElement('div');
      card.className = 'review-card';

      card.innerHTML = `
        <p>${r.text}</p>
        <div class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
        <h4>— ${r.name}</h4>
      `;

      reviewsContainer.appendChild(card);
      setTimeout(() => card.classList.add('show'), 100);
    });
  });
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


console.log("Premium Review Page Loaded");
