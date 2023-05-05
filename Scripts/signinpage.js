// let data=JSON.parse(localStorage.getItem("register"))||[]


// let form =document.querySelector("form")
// form.addEventListener("submit",(e)=>{
//     e.preventDefault()

//     let email= document.getElementById("email").value
//     let password= document.getElementById("password").value
//     let flag=false
//    if(email=="admin"&&password=="admin")
//    {
//     window.location.href="./admin/admin.html"
//     console.log("blessmi")
        
//    }    
//    else{    
//    for(let i=0;i<data.length;i++){
//         if(data[i].email===email&&data[i].password===password)
//         {
//             flag=true
//             localStorage.setItem("login",JSON.stringify(data[i]))
//         }
//     }
//     if(flag)
//     {
//         alert("Login Successfully")
//         window.location.href="./index.html"
//     }
//     else{
//         alert("Enter correct Email Id Password")
//     }
//     }

// })

// //  direct to register page
// let registerPage= document.getElementById("createAccount")
// registerPage.addEventListener("click",()=>{
//     window.location.href="register.html"
// })