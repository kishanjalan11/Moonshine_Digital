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
    return displayData(ele.img,ele.title,ele.date,ele.description,ele.id)
  }).join("")}
  </div>`
  mainSection.innerHTML = display
}
function displayData(img,title,date,description,id)
{
let card = `
<div class = "card" data-id =  ${id}>
<div class = "card-body">
<img src =${img} alt = "img">
<p class = "card-date">${date}</p>
<h4 class = "card-title">${title}</h4>
<p class = "card-description">${description}</p>
</div>
</div>
`
return card
 }

