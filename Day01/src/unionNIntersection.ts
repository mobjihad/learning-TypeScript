type UserRole = "Admin"| "HAMS" | "SWL"| "User" ;


const dash = (type: UserRole)=>{

        if(type==='Admin'){

            console.log("Admin Dash");

        }else if(type ==="HAMS"){

            console.log("HAM Dash");

        }else if( type ==="SWL"){

            console.log("SWL Dash");

        }else{

            console.log("User Dash")
        }
}

const dashBoard = dash("Admin");

console.log(dashBoard);




type User = {
    name:string;
    Age: number;
    country: string; 
    email: string;
    phone:string
}

type Hams = {

    call: string;
    lyear: string;
    lClass?:string;
    gear?: string; 
}

type SWL = {

    gear: string ;
    software: string;
}

type Admin = {

        accessLevel: number;
        hasAccess: boolean;
}

type superAdmin = Hams & Admin & User ; 
type adminUser = Hams & Admin ;
type normalAdmin  = Admin & User ; 


const Jihad :  superAdmin = {

    name: "Jihad",
    Age: 26,
    country: "S2",
    email: "mob@Hamsyndicate.org",
    phone: "0170000000000",
    accessLevel: 1,
    hasAccess: true, 
    call: "S21MOB",
    lyear: "2023",

   
}

