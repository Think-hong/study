
const fs = require("fs").promises;
class UserStorage{


    static getUsers(){
        return fs.readFile("./src/databases/users.json")
        .then((data) => {
            const users = JSON.parse(data);
            return users
        })
    }
    
    static getUserinfo(id){
        var newUsers = new Object();
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

    static async save(userInfo){
        const users = await this.getUsers();
        if(users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디입니다.";
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        fs.writeFile("./src/databases/users.json",JSON.stringify(users));
        return { success : true };

    }
}


module.exports = UserStorage;