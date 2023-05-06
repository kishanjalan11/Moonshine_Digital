const sideMenu = document.querySelector("aside");
const closeBtn = document.querySelector("#close-btn");

//show sidebar


//close sidebar
closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
});

//display services

let productsContainer = document.getElementById("product-container");
// let productsArray = JSON.parse(localStorage.getItem("products")) || [];

window.addEventListener("load", function(e){
    e.preventDefault();

    fetchProducts();
});

function fetchProducts(){
    fetch(`http://localhost:3000/services`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        displayProducts(data);
    })
}

// displayProducts(productsArray);

function displayProducts(data){
    productsContainer.innerHTML = "";

    data.forEach((product, index) => {
        let productCard = document.createElement("div");
        productCard.setAttribute("class", "product-card");

        let productImg = document.createElement("img");
        productImg.setAttribute("class", "product-img");
        productImg.src = product.image;

        let productDesc = document.createElement("p");
        productDesc.setAttribute("class", "product-desc");
        productDesc.innerText = product.description;

        let productName = document.createElement("h2");
        productName.setAttribute("class", "product-category");
        productName.innerText = product.name;
        

        let removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.setAttribute("class", "remove-btn");

        let editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.setAttribute("class", "edit-btn");
        removeButton.addEventListener("click", function(){
            removeProduct(product.id);
        })

        editButton.addEventListener("click", function(){
            localStorage.setItem("editItem", product.id)
            window.location.href="editService.html";

        })

        productCard.append(productImg, productName, productDesc,  removeButton, editButton);
        productsContainer.append(productCard);
    });
}

function removeProduct(productid){
    fetch(`http://localhost:3000/services/${productid}`, {
        method : 'DELETE',
        headers : {
            'Content-type' : 'application/json'
        }
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        fetchProducts();
    })
}