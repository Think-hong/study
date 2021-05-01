

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginbtn = document.querySelector("button");

loginbtn.addEventListener("click", login);

async function login(){
    const req = {
        id : id.value,
        password : password.value,
    };


    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(req)
    }).then (res => res.json())
      .then(res => {
          if(res.success){
              location.href = "/"
          }
          else{
              alert(res.msg)
          }
      })
      .catch((err) => {
        alert("실패");
      });
    }