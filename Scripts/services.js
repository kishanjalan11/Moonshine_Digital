
let mainSection = document.getElementById("main")
window.addEventListener("load", (e) => {
    fetchData()
 });
    

async function fetchData(){
    try {
        let res = await fetch(`http://localhost:3000/services`);
        let data = await res.json();
        console.log(data)
        displaydata(data)
       
    } catch (error) {
        console.log(error);
    }
}

function displaydata(data){

    mainSection.innerHTML="";
    
        data.forEach(element => {
            let cardlist = document.createElement("div");
            cardlist.setAttribute("class", "card-list");
          
            let card = document.createElement("div");
            card.setAttribute("class", "card");
            card.setAttribute("data-id", element.id);
          
            let cardImage = document.createElement("div");
            cardImage.classList.add("card_img");
          
            let img = document.createElement("img");
            img.src = element.image;
            img.setAttribute("alt", "img");
          
            cardImage.append(img);
          
            let cardbody = document.createElement("div");
            cardbody.classList.add("class", "card_body");
          
            let cardTitle = document.createElement("h2");
            cardTitle.classList.add("card_item", "card_title");
            cardTitle.innerText = element.name;
    
            let cardDesc = document.createElement("p");
            cardDesc.classList.add("card_desc", "card_descrip");
            cardDesc.innerText = element.description;

            let a=document.createElement("a")
            a.classList.add("anker","link")
            a.innerText="Read More"
            a.addEventListener("click",funClick)
            function funClick(){
                localStorage.setItem("id",element.id)
                window.location.href="detail.html"
            }
    
            cardbody.append(cardTitle);
            cardbody.append(cardDesc, a)
          
            card.append(cardImage)
            card.append(cardbody)
        cardlist.append(card)
            // card.append(img,cardTitle,cardDesc)
            mainSection.append(cardlist)
           });
    }

