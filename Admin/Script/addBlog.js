let myform = document.getElementById("myform")
myform.addEventListener("submit", postData)


async function postData(){
    event.preventDefault();
    
    try {
        let res = await fetch("http://localhost:3000/blogs",
    {
      method:"POST",
      body: JSON.stringify(
        {
            "title": myform.title.value,
            "img": myform.blgImg.value,
            "description": myform.description.value,
            "date":myform.date.value
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

