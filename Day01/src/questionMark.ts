

const userRole = (role : string) =>{

    const result = role ==="Admin"? "Admin": "You are Guest" ; 
    console.log(result); 

}


userRole("Guuest");


const isAuthinticated = undefined ; 

const userStatus = isAuthinticated ?? "Guest" ; 

console.log(userStatus) ; 

const user:{
    Name:string;
    address:{ 
            town:string;
            Area: string;
            postalCode?:string
    }
} = {

        Name: "S21MOB",
        address: {

            town:"Dhaka",
            Area: "Gulshan",
    

        }
}

const addr = user.address.postalCode ; 
console.log(addr);