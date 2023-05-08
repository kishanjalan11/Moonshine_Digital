let container=document.getElementById("container")
productData()

async function productData(){
    
    let id = localStorage.getItem("id")
    // console.log(id)
    try {
        let res = await fetch(`http://localhost:3000/services/${id}`);
        let data = await res.json();
        console.log(data)
        displayData(data)
    } catch (error) {
        console.log(error)
    }
}


function displayData(data){

   container.innerHTML="";
    
            let cardlist = document.createElement("div");
            cardlist.setAttribute("class", "card-list");
          
            let card = document.createElement("div");
            card.setAttribute("class", "card");
            card.setAttribute("data-id", data.id);
          
            let cardImage = document.createElement("div");
            cardImage.classList.add("card_img");
          
            let img = document.createElement("img");
            img.src = data.image;
            img.setAttribute("alt", "img");
          
            cardImage.append(img);
          
            let cardbody = document.createElement("div");
            cardbody.classList.add("class", "card_body");
          
            let cardTitle = document.createElement("h2");
            cardTitle.classList.add("card_item", "card_title");
            cardTitle.innerText = data.name;
    
            let cardDesc = document.createElement("p");
            cardDesc.classList.add("card_desc", "card_descrip");
            cardDesc.innerText = data.description;

            let longDesc = document.createElement("p");
            longDesc.classList.add("longdesc", "longdescrip");
            longDesc.innerText = data.longDes;
            

            // let a=document.createElement("a")
            // a.classList.add("anker","link")
            // a.innerText="Read More"

        //    a.addEventListener("click", function(){
        //         localStorage.setItem("id", element.id)
        //         window.location.href="details.html";
    
        //     })
    
            cardbody.append(cardTitle);
            cardbody.append(cardDesc)
          
            card.append(cardImage)
            card.append(cardbody,longDesc)
        cardlist.append(card)
            // card.append(img,cardTitle,cardDesc)
         container.append(cardlist)
       
    }

