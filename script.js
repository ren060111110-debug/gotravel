// Booking Tabs
const bookTabButtons = document.querySelectorAll(
  ".booking .booking__tabs .tab-btn"
);
const bookingContents = document.querySelectorAll(".booking .booking__content");
for (let i = 0; i < bookTabButtons.length; i++) {
  bookTabButtons[i].addEventListener("click", function () {
    for (let i = 0; i < bookTabButtons.length; i++) {
      bookTabButtons[i].classList.remove("tab-btn--active");
      bookingContents[i].classList.add("hidden");
    }
    bookTabButtons[i].classList.add("tab-btn--active");
    bookingContents[i].classList.remove("hidden");
  });
}

// Toggle review content when avatar is clicked
const reviewCards = document.querySelectorAll(".review-card");

reviewCards.forEach((avatar) => {
  avatar.addEventListener("click", function (e) {
    const reviewCard = e.target.closest(".review-card");
    const reviewContent = reviewCard.querySelector(".review-card__content");

    // Toggle expanded state
    reviewCard.classList.toggle("review-card--expanded");
    reviewContent.classList.toggle("review-card__content--expanded");
  });
});
