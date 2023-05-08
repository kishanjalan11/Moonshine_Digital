
let blogData = null;

function getQueryParam(paramName) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramName);
}

window.addEventListener("load", async function () {
  const id = getQueryParam("id");
  if (!id) {
    alert("Invalid blog ID");
    return;
  }

  const res = await fetch(`http://localhost:3000/blogs/${id}`, {
    method: "GET",
  });
  const data = await res.json();
  blogData = data;
  console.log(blogData);
  displayBlogData(blogData);
});

function displayBlogData(data) {
  const mainSection = document.getElementById("data-list-wrapper");
  const cardList = document.createElement("div");
  cardList.setAttribute("class", "card-list");

  const card = `
    <div class="card">
      <div class="card-body">
      <p class="card-date">${data.date}</p>
      <h1 class="card-title">${data.title}</h1>
      <img src="${data.img}" alt="img" class="card-img">
      <div class="card-description">${data.description}</div>
      </div>
    </div>
  `;

  mainSection.innerHTML = card;
}
