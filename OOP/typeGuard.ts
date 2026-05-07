

const addmuber = (num1 : string | number , num2 : string | number )=>{


    if(typeof num1 ==="number" && typeof num2 ==="number"){

        return num1+num2 ; 
    }else{

        num1 = num1.toString();
        num2= num2.toString();

        return num1+num2 ; 
    }


}

const r = addmuber(2,2);
const r2 = addmuber(2, "2");
const r3 = addmuber("3",2);


type TNormalUser = {

    Name: string ;
    phone: string; 

}


type TAdminUser = {
    Name: string; 
    role: string ; 
}


const getUser = (user: TNormalUser | TAdminUser ) => {

    if( "role" in user){
        console.log(`Username is ${user.Name} and roles is ${user.role}`);
    }else{ 
    console.log(`Username is ${user.Name}`)
    }
}


getUser({Name:"MOB", phone : "00999"});
getUser({Name:"MOB", role : "Admin"});