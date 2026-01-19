const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const title = document.getElementById("galleryTitle");
const gallery = document.getElementById("gallery");

title.innerText = category.toUpperCase() + " PHOTOGRAPHY";

const images = {
  baby: ["images/baby/1.jpg", "images/baby/2.jpg", "images/baby/3.jpg", "images/baby/4.jpg ","images/baby/5.jpg","images/baby/6.jpg","images/baby/7.jpg","images/baby/8.jpg","images/baby/9.jpg","images/baby/10.jpg"],
  wedding: ["images/wedding/1.jpg", "images/wedding/2.jpg", "images/wedding/3.jpg"],
  passport: ["images/pre-wedding/1.jpg", "images/pre-wedding/2.jpg"],
  event: ["images/event/1.jpg", "images/event/2.jpg", "images/event/3.jpg"]
};

images[category].forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  gallery.appendChild(img);
});
