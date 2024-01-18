class user{
    name: string;
    aeg: number
    constructor(name:string,aeg:number){
        this.name=name;
        this.aeg=aeg
    }
}

// let user1 = new user("Sr",2343)
// let user2 = new user("rony",23)
// let user3 = new user("sagor",2)

// console.log(user1);
// console.log(user2);
// console.log(user3);

class newUser extends user{
    userId:number

    constructor(name:string,aeg:number,useeId:number){
        super(name,aeg)
        this.userId=useeId
    }
}

let student =new newUser("SR Rony",22,234535)
console.log(student);



