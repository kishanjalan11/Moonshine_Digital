let mainsection = document.getElementById("container")


const projects = [
    { "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFW_LQASLm-2y6HL2CtkHDwmpbtsQVAmKYCA&usqp=CAU",
     "name" : "AGRO TURABO",
     "id" : 1
    },
    { "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD85luXG9_OppIHNxdCOq0eMKEjLvumo7jhw&usqp=CAU",
     "name" : "BIKE APP",
     "id" : 2
    },
    { "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ps5QNQ686YQ-rGhvh0SsO8N6IuCus11zgg&usqp=CAU",
     "name" : "SPECS MART",
     "id" : 3
    },
    { "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkq21ICEFSSGUEaK1Mq35C7X1Ee9f5zNcag&usqp=CAU",
     "name" : "E-Basket",
     "id" : 4
    },
    { "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhDPSMKnsLaoFLos2dSpj5DhRIqngOdMYwJA&usqp=CAU",
     "name" : "MEAT-A-DORA",
     "id" : 5
    },
    { "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFW_LQASLm-2y6HL2CtkHDwmpbtsQVAmKYCA&usqp=CAU",
    "name" : "HOUSE-OF-DREAM",
    "id" : 6
   },
   { "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD85luXG9_OppIHNxdCOq0eMKEjLvumo7jhw&usqp=CAU",
    "name" : "AIM LOGIC",
    "id" : 7
   },
   { "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ps5QNQ686YQ-rGhvh0SsO8N6IuCus11zgg&usqp=CAU",
    "name" : "SYMOVA MART",
    "id" : 8
   },
   { "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkq21ICEFSSGUEaK1Mq35C7X1Ee9f5zNcag&usqp=CAU",
    "name" : "HIMEE",
    "id" : 9
   },
   { "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhDPSMKnsLaoFLos2dSpj5DhRIqngOdMYwJA&usqp=CAU",
    "name" : "HADLEY RESTAURANT",
    "id" : 10
   }
]
function displaydata(projects){

    mainsection.innerHTML="";
    
    projects.forEach(element => {
            let cardlist = document.createElement("div");
            cardlist.setAttribute("class", "card-list");
          
            let card = document.createElement("div");
            card.setAttribute("class", "card");
            card.setAttribute("data-id", element.id);
          
            let cardImage = document.createElement("div");
            cardImage.classList.add("card_img");
          
            let img = document.createElement("img");
            img.src = element.image;
            img.setAttribute("alt", "food");
          
            cardImage.append(img);
          
            let cardbody = document.createElement("div");
            cardbody.classList.add("class", "card_body");
          
            let cardTitle = document.createElement("h2");
            cardTitle.classList.add("card_item", "card_title");
            cardTitle.innerText = element.name;
    
            cardbody.append(cardTitle);
          
            card.append(cardImage)
            card.append(cardbody)
    
            cardlist.append(card)
            mainsection.append(cardlist)
           });
    }
    displaydata(projects)

    let srchInp = document.getElementById("searchbox");
document.getElementById("srchbtn").addEventListener("click", () => {
    let searchParams = srchInp.value;
    let searched = projects.filter((element) => {
        if (
            element.name &&
            element.name.toUpperCase().includes(searchParams.toUpperCase())
        ) {
            return true;
        } else {
            return false;
        }
    });
    displaydata(searched);
});
