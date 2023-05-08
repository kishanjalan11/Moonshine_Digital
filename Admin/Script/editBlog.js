

productData()

async function productData(e){
    
    let id = localStorage.getItem("editBlog")
    //console.log(id)
    try {
        let res = await fetch(`http://localhost:3000/blogs/${id}`);
        let data = await res.json();
        //console.log(data)
        displayData(data)
    } catch (error) {
        console.log(error)
    }
}

function displayData(data){
   
    console.log(data)
    
    let id = document.getElementById("itemId")
    let title = document.getElementById("title")
    let image = document.getElementById("blgImg")
    let des = document.getElementById("description")
    console.log(id)
    id.value=data.id
    title.value=data.title
    image.value=data.img
    des.value = data.description;
    


}

let myform = document.getElementById("myform")
myform.addEventListener("submit", postData)


async function postData(){
    event.preventDefault();
    let id = myform.itemId.value
    console.log("**",id)
    try {
        let res = await fetch(`http://localhost:3000/blogs/${id}`,
    {
      method:"PATCH",
      body: JSON.stringify(
        {
            "title": myform.title.value,
            "img": myform.blgImg.value,
            "description": myform.description.value,
            
        }
      ),
      headers:{
        "Content-type": "application/json"
      }
    })

    let data= await res.json();
    console.log(data)
    alert("Successfully Updated")
    window.location.href="admin.html";
    } catch (error) {
        console.log(error)
    }
}

