

class UserStorage{
    static #users= {
        id:["홍서윤","힘들군","되면 좋겠다."],
        password:["1234","1234","1234"],
        name:["콩이","유재석","엠에스지"],
        confirmPassword:["1234","1234","1234"],
    }

    static getUsers(){
        return this.#users;
    }
    
    static getUserinfo(id){
        var newUsers = new Object();
        const users = this.#users;
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
    }

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        users.confirmPassword.push(userInfo.confirmPassword);
        console.log(users);
        return { success : true };

    }
}


module.exports = UserStorage;