

let data=JSON.parse(localStorage.getItem("register"))||[]
// let data=[]

let form =document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    //  I am checking here if user already register so retrun error
    let email= document.getElementById("email").value
    let flag=true
    console.log(data);
    for(let i=0;i<data.length;i++)
    {
        if(data[i].email==email)
        {
            flag=false
        }
    }
    if(flag)
    {
        
            let name= document.getElementById("name").value
            let lastName = document.getElementById("lastName").value
            let phone= document.getElementById("phone").value
            // let gender= document.getElementById("gender").value
            // let birthMonth= document.getElementById("birthMonth").value
            // let birthDate= document.getElementById("birthDate").value
            // let email= document.getElementById("email").value
            // let ConfirmEmail= document.getElementById("ConfirmEmail").value
            let password= document.getElementById("password").value
            // let confirmPassword= document.getElementById("confirmPassword").value
            // if(email!==ConfirmEmail)
            // {
            //     alert("Email is not matching")
            //     return
            // }
            // if(password!==confirmPassword)
            // {
            //     alert("Password Mismatch")
            //     return
            // }
            if(name&&lastName&&phone&&email&&password&&checkbox)
            {
                let obj={
                    name:name+" "+lastName,
                    phone:phone,
                    email:email,
                    password:password
                }
                data.push(obj)
                localStorage.setItem("register",JSON.stringify(data))
                alert("Registeration Successfully")
            }
            else
            {
                alert("Complete every feild")
            }

    }
        else{
            alert("User Already Registerd")
            return }
    })
        
//  direct to login page
let loginbtn= document.getElementById("logHere")

loginbtn.addEventListener("click",()=>{
    window.location.href="./signinpage.html"
})




