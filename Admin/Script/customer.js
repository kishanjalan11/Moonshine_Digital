fetchCustomer()
function fetchCustomer(){
    fetch(`http://localhost:3000/customers`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        ShowData(data);
    })
}

function ShowData(data) {
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    data.forEach((cust,index1) => {
      let Tr = document.createElement("tr");
      let Td1 = document.createElement("td");
      let Td2 = document.createElement("td");
      let Td3 = document.createElement("td");
      
      Td1.innerText = cust.name;
      Td2.innerText = cust.email;
      Td3.innerText = cust.mobile;
     
     
      
      Tr.append(Td1, Td2, Td3);
      tbody.append(Tr);
    });
  
  }