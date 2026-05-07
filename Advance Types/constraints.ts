
interface  IUserBasic{

        uName: string;
        email:string;
        phone:string;
}

const addUserToDB = <T extends IUserBasic>(Userinfo: T) =>{

        return {Name:"Ham Syndicate", 
                ...Userinfo
        }
}


const userToDb1 = { 

    uName:"Havoc",
    email:"havoc@mail.com",
    phone: "000000000"
}

const userToDb2 = {
    uName:"Havoc",
    email:"havoc@mail.com",
    phone: "000000000"
}

const r1 = addUserToDB(userToDb1);
const r2 = addUserToDB(userToDb2); 

console.log(r1, r2)