let blogsData = []
let baseURL = "http://localhost:3000/blogs"
window.addEventListener("load",async function()
{
  let res =await fetch("http://localhost:3000/blogs",{
    method : "GET"
  })
  let data = await res.json()
  blogsData = data
  console.log(blogsData)
  createCard(blogsData)
})

let mainSection = document.getElementById("data-list-wrapper");
let cardList = document.createElement("div")
cardList.setAttribute("class","card-list")

mainSection.append(cardList)

function createCard(data)
{
  mainSection.innerHTML = null;
  let display = `<div class = "card-list">
  ${data.map((ele)=>{
    return displayData(ele.img,ele.title,ele.date,ele.description,ele.id,ele.category)
  }).join("")}
  </div>`
  mainSection.innerHTML = display
}
function displayData(img,title,date,description,id,category)
{
let card = `
<div class = "card" data-id =  ${id}>
<div class = "card-body">
<img src =${img} alt = "img" class="card-img">
<p class = "card-date">${date}</p>
<h2 class = "card-title">${title}</h2>
<p class = "card-description">${description}</p>
</div>
</div>
`
return card
 }

 const filterEl = document.getElementById("filter");
 filterEl.addEventListener("change", async function() {
    const selectedCategory = filterEl.value;
    if (selectedCategory === "") {
      
      const res = await fetch(baseURL, {
        method: "GET"
      });
      const data = await res.json();
      mainSection.innerHTML = "";
      createCard(data);
    } else {
      const res = await fetch(`${baseURL}?category=${selectedCategory}`, {
        method: "GET"
      });
      const data = await res.json();
      mainSection.innerHTML = "";
      createCard(data);
    }
  });
  

document.addEventListener("click", function(event) {
    if (event.target.matches(".card-img")) {
      const cardId = event.target.closest(".card").getAttribute("data-id");
      window.location.href = `description.html?id=${cardId}`;
    }
  });
  