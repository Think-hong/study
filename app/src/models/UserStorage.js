const db = require("../config/db");

class UserStorage{
    

    static getUsers(){
        
    }
    
    static getUserinfo(id){
            return new Promise((resolve, reject)=>{
                db.query("select * from users where id = ?", [id], (err, data)=>{
                    if(err) reject(err);
                    if(typeof data[0] == "undefined"){
                        const newuser = {
                            id : false,
                            psword : false,
                        }
                        resolve(newuser);
                    }
                    
                    else {
                        resolve(data[0]); 
                    }
            })
            
        })
            
    
}

    static save(userInfo){
        

    }
}


module.exports = UserStorage;