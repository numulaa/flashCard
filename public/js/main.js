const deleteBtn = document.querySelectorAll(".fa-trash");
const cardItems = document.querySelectorAll(".allcards span ");
const flashCardReview = document.querySelectorAll(".answerBtn");

Array.from(deleteBtn).forEach((element) =>
  element.addEventListener("click", deleteCard)
);
Array.from(flashCardReview).forEach((element) =>
  element.addEventListener("click", markReviewed)
);

async function deleteCard() {
  const flashCardId = this.parentNode.dataset.id;
  try {
    const response = await fetch("flashCard/deleteFlashCard", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        flashCardIdFromJS: flashCardId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
async function markReviewed() {
  const flashCardId = this.parentNode.dataset.id;
  try {
    const response = await fetch("flashCard/markReviewed", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        flashCardIdFromJS: flashCardId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
