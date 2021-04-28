

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginbtn = document.querySelector("button");

loginbtn.addEventListener("click", login);

function login(){
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
    }).then((res) => res.json())
      .then((res) => {
          if(res.sucess){
              location.href = "/"
          }
          else{
              alert(res.msg)
          }
      })
      .catch((err) => {
          console.error(new Error("로그인중 에러발생"));
      });
    }