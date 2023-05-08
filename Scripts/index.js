let servicesDiv=document.getElementById("servicesGrid");

function contact(){
    window.location.href="./contactUs.html";
}

onPageLoad();   
function onPageLoad(){
    fetch("http://localhost:3000/services")
    .then((data)=>data.json())
    .then((data)=>{
        showServices(data);
    })
}

function showServices(data){
    let container=document.getElementById("servicesGrid");
    data.forEach(function(element){
        container.append(appendCard(element))
    })
}

function appendCard(element){
    let card=document.createElement("div");
    card.className="servicesCard";
        let image=document.createElement("img");
        image.src=element.image;
        let p=document.createElement("p");
        p.className="servicesHeader";
        p.innerText=element.name;
        let desc=document.createElement("p");
        desc.className="servicesDesc";
        desc.innerText=element.description;
        let a=document.createElement("a");
        a.innerText="View Case Study";
    card.append(image,p,desc,a);
    return card;
}