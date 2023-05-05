let myform = document.getElementById("myform")
myform.addEventListener("submit", postData)


async function postData(){
    event.preventDefault();
    
    try {
        let res = await fetch("http://localhost:3000/services",
    {
      method:"POST",
      body: JSON.stringify(
        {
            "name": myform.name.value,
            "image": myform.serImg.value,
            "description": myform.description.value,
        }
      ),
      headers:{
        "Content-type": "application/json"
      }
    })

    let data= await res.json();
    console.log(data)
    alert("Successfully Added")
    window.location.href="admin.html";
    } catch (error) {
        console.log(error)
    }
}

