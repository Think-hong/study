const User = require("../../models/User");


output = {
    home : (req,res) =>{
        res.render("home/index");
    },
    
    login : (req, res) => {
        res.render("home/login");
    },

    register : (req, res) => {
        res.render("home/register");
    }
    
}


deliver = {
    login : async (req,res)=> {
        const user = new User(req.body);
        const response = await user.login();
        console.log("delover에서 반환", response);
        return res.json(response);
    }, 

    register : (req,res)=> {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    } 

}





module.exports = {
    output,
    deliver
};



