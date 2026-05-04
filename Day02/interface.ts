

interface IUser {

    name: string ;
    call: string;
    year:string;
}


interface IuserWithRole extends IUser{

    role: "Admin" | "User";
}


const user1: IuserWithRole = {

        name: "Sayem",
        call:"S21HMX",
        year: "2023", 
        role: "User"

    }

    interface friends {

        [index : number ] : string ; 
    } 

    const friend : friends = ["1","34","Hello"]; 


    interface Iadd {

        (num1 : number , num2 : number) : number ; 
    }


