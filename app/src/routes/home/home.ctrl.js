const UserStorage = require("../../models/UserStorage");


output = {
    home : (req,res) =>{
        res.render("home/index");
    },
    
    login : (req, res) => {
        res.render("home/login");
    }
    
}





deliver = {
    login(req,res){
        const id = req.body.id;
        const password = req.body.password;
        console.log(UserStorage.getUsers());

        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(password == users.password[idx]) {
                return res.json({
                    sucess:true
                });
            }
        }
        return res.json({
            sucess:false,
            msg: "로그인에 실패했습니다."
        })
    }
}



module.exports = {
    output,
    deliver
};



