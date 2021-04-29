

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#password-confirm");
const registerbtn = document.querySelector("button");


registerbtn.addEventListener("click", register);

function register(){
    if(!id.value){
        return alert("아이디를 입력해 주세요.");
    }

    if(password.value !== confirmPassword.value){
        return alert("비밀번호가 일치하지 않습니다.");
    }
    const req = {
        id : id.value,
        name : name.value,
        password : password.value,
        confirmPassword : confirmPassword.value,
    };
    console.log(req);


    fetch("register", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(req)
    }).then((res) => res.json())
      .then((res) => {
          if(res.success){
              location.href = "/login"
          }
          else{
              alert(res.msg)
          }
      })
      .catch((err) => {
          console.error(new Error("회원가입중 에러발생"));
      });
    }