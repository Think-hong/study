
const UserStorage = require("./UserStorage");

class User {
    constructor(body){
        this.body = body;
    }

    async login(){
        const body = this.body
        const {id, password} = await UserStorage.getUserinfo(body.id);
        if(id){
            if(password == body.password){
                return {success : true};
            }
            else{
                return {success: false, msg : "비밀번호가 일치하지 않습니다."}
            }
        }
        else{
            return {success: false, msg : "존재하지 않는 아이디 입니다."}
        }
    }

    async register(){
        const body = this.body
        try{
        const response = await UserStorage.save(body);
        return response;
        } catch(err){
            return{ success : false, msg: err};
        }
    }

}

module.exports = User;
