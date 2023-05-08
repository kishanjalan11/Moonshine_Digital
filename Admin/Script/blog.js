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
    fetch(`http://localhost:3000/blogs`)
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
        //console.log(product.description)
        let productCard = document.createElement("div");
        productCard.setAttribute("class", "product-card");

        let productImg = document.createElement("img");
        productImg.setAttribute("class", "product-img");
        productImg.src = product.img;

        let productDesc = document.createElement("p");
        productDesc.setAttribute("class", "product-desc");
        productDesc.innerText = product.description;

        let date = document.createElement("p");
        date.setAttribute("class", "product-desc");
        date.innerText = product.date;

        let productName = document.createElement("h3");
        productName.setAttribute("class", "product-category");
        productName.innerText = product.title;
        

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
            localStorage.setItem("editBlog", product.id)
            window.location.href="editBlog.html";

        })

        productCard.append(productImg, productName, date, productDesc,  removeButton, editButton);
        productsContainer.append(productCard);
    });
}

function removeProduct(productid){
    fetch(`http://localhost:3000/blogs/${productid}`, {
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