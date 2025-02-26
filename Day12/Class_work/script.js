let form=document.getElementById("userForm");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let fullName=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let number=document.getElementById("number").value;
    let password=document.getElementById("password").value;
    let confirm_password=document.getElementById("confirm-password").value;

    let obj={
        fullName,email,number,password,confirm_password
    }
    console.log(obj);
    if(obj.password!=obj.confirm_password) {
         return alert("Password is not matching")
    }
    let tr=document.createElement("tr")

    let td1=document.createElement("td")
    td1.innerText=obj.fullName;

    let td2=document.createElement("td")
    td2.innerText=obj.email;

    let td3=document.createElement("td")
    td3.innerText=obj.number;

    let td4=document.createElement("td")
    td4.innerText=obj.password;

    let td5=document.createElement("td")
    td5.innerText=obj.confirm_password;

    tr.append(td1,td2,td3,td4,td5)
    document.getElementById("tbody").append(tr)


    // console.log(obj)
    // console.log(fullName,password,confirm_password)
})

