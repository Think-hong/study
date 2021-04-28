

class UserStorage{
    static #users= {
        id:["홍서윤","힘들군","되면 좋겠다."],
        password:["1234","1234","1234"]
    }

    static getUsers(){
        return this.#users;
    }
}


module.exports = UserStorage;