let data=JSON.parse(localStorage.getItem("register"))||[]


let form =document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let email= document.getElementById("email").value
    let password= document.getElementById("password").value
   if(email=="admin"&&password=="admin")
   {
    // window.location.href="./admin/admin.html"
    console.log("blessmi")
        
   }    
   else{
    alert("Enter correct username password")
   }

})

