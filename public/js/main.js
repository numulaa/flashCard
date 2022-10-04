const deleteBtn = document.querySelectorAll(".fa-trash");
const cardItems = document.querySelectorAll(".card span ");

Array.from(deleteBtn).forEach((element) =>
  element.addEventListener("click", deleteCard)
);

async function deleteCard() {
  const cardText = this.parentNode.childNodes[1].innerText;
  try {
    const response = await fetch("deleteCard", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cardFromJS: cardText,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
