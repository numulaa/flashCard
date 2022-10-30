const categoryBox = document.querySelectorAll(".category .showCards");
Array.from(categoryBox).forEach((el) =>
  el.addEventListener("click", showCategoryItems)
);
async function showCategoryItems() {
  const categoryId = this.parentNode.dataset.id;
  try {
    const response = await fetch("cardCategory/flashCardItems/", {
      method: "get",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        categoryIdFromJS: categoryId,
      }),
    });
    const data = await response.json();
    console.log(data);
    console.log("category clicked");
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
