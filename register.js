

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
            let gender= document.getElementById("gender").value
            let birthMonth= document.getElementById("birthMonth").value
            let birthDate= document.getElementById("birthDate").value
            // let email= document.getElementById("email").value
            let ConfirmEmail= document.getElementById("ConfirmEmail").value
            let password= document.getElementById("password").value
            let confirmPassword= document.getElementById("confirmPassword").value
            if(email!==ConfirmEmail)
            {
                alert("Email is not matching")
                return
            }
            if(password!==confirmPassword)
            {
                alert("Password Mismatch")
                return
            }
            if(name&&lastName&&phone&&gender&&birthMonth&&birthDate&&email&&ConfirmEmail&&password&&confirmPassword&&checkbox)
            {
                let obj={
                    name:name+" "+lastName,
                    phone:phone,
                    gender:gender,
                    birthDate:birthDate+" "+birthMonth,
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
    window.location.href="./signInPage.html"
})




//  drop down js
const dropdowns=document.querySelectorAll(".dropdown")

//  loop through all dropdown elements
dropdowns.forEach(dropdown=>{
    // get inner elements from each dropdown
    const account=  document.querySelectorAll(".dropdown")
    const select = dropdown.querySelector(".select")
    const caret = dropdown.querySelector(".caret")
    const menu = dropdown.querySelector(".menu")
    const options= dropdown.querySelectorAll(".menu li")
    const selected = dropdown.querySelector(".selected")
    
    // We are using this method in order to have multiple dropdown menus on the page work

    //  add a click event to the select element
    select.addEventListener("click",()=>{
        //  Add the clicked select styles to the select element 
        select.classList.toggle("select-clicked")
        // account[0].style.marginBottom="100px"
    //  Add the rotate styles to the caret element
        caret.classList.toggle("caret-rotate")
        // Add the open styles to the menu element
        menu.classList.toggle("menu-open")
        // account[0].style.marginBottom="1px"
        account[0].classList.toggle("select-dropdown")
    })

    

    //  loop through all option elements
    options.forEach(option =>{

        option.addEventListener("click",()=>{
            selected.innerText=option.innerText;
            account[0].classList.remove("select-dropdown")
            select.classList.remove("select-clicked")
            // account[0].style.marginBottom="0px"
            caret.classList.remove("caret-rotate")
            menu.classList.remove("menu-open")
             options.forEach(option=>{
                option.classList.remove("active")
             })
             option.classList.add("active")
        })
    })

})
