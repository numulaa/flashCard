const answerBtn = document.querySelectorAll(".card button");
const backSide = document.querySelectorAll(".backSide");
Array.from(answerBtn).forEach((element) =>
  element.addEventListener("click", showAnswer)
);
function showAnswer() {
  backSide.classList.toggle(".hiddenAnswer");
}
