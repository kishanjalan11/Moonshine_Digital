

productData()

async function productData(e){
    
    let id = localStorage.getItem("editItem")
    //console.log(id)
    try {
        let res = await fetch(`http://localhost:3000/services/${id}`);
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
    let name = document.getElementById("name")
    let image = document.getElementById("serImg")
    let des = document.getElementById("description")
    let longDes = document.getElementById("longDes")
    console.log(id)
    id.value=data.id
    name.value=data.name
    image.value=data.image
    des.value = data.description;
    longDes.value= data.longDes


}

let myform = document.getElementById("myform")
myform.addEventListener("submit", postData)


async function postData(){
    event.preventDefault();
    let id = myform.itemId.value
    console.log("**",id)
    try {
        let res = await fetch(`http://localhost:3000/services/${id}`,
    {
      method:"PATCH",
      body: JSON.stringify(
        {
            "name": myform.name.value,
            "image": myform.serImg.value,
            "description": myform.description.value,
            "longDes":myform.longDes.value
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

