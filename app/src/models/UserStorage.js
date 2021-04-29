
const fs = require("fs").promises;
class UserStorage{


    static getUsers(){
        //return this.#users;
    }
    
    static getUserinfo(id){
        var newUsers = new Object();
        //const users = this.#users;
        return fs.readFile("./src/databases/users.json")
        .then((data) => {
            const users = JSON.parse(data);
            newUsers = {
                id : false,
                password : false
            }
    
            if (users.id.includes(id)){
                const idx = users.id.indexOf(id);
                newUsers = {
                    id : users.id[idx],
                    password : users.password[idx]
                }
            }
            
            return newUsers
        })
        .catch(console.error);

    }

    static save(userInfo){
        //const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        users.confirmPassword.push(userInfo.confirmPassword);
        console.log(users);
        return { success : true };

    }
}


module.exports = UserStorage;