let form = document.querySelector("form");
let nameL = document.getElementById("name");
let emailL = document.getElementById("email")
let numberL = document.getElementById("number")
let messageL = document.getElementById("message")
let btn = document.getElementById("btn")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    postcustomers()
})

async function postcustomers(){
    if(nameL.value=="" || emailL.value=="" ||numberL.value=="" || messageL.value==""){
        alert("Please enter your correct details")
    }else{
        try {
            let res = await fetch(`http://localhost:3000/customers`, {
                method:"POST",
          body: JSON.stringify(
            {
                "name" : nameL.value,
                "email" : emailL.value,
                "mobile" : numberL.value,
                "message" : messageL.value
            }
          ),
          headers:{
            "Content-type": "application/json"
          }
        })
            let data = await res.json()
            console.log(data)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Congradulation!',
                text : 'Your message & email sent to the approver',
                showConfirmButton: false,
                timer: 3000
              })
              setTimeout(() => {
                window.location.href="./contactUs.html"
            }, 2000)
        } catch (error) {
            console.log(error)
        }
    } 
}
