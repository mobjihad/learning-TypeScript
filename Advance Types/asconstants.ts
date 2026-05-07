
const User = {


        Admin: "ADMIN",
        Editor: "EDITOR",
        Guest: "GUEST"
}as const

//console.log( typeof User[keyof typeof User])



const returnUser = (user : typeof User[keyof typeof User]) =>{

        if(user=== User.Admin){
            console.log("true");
        }
}

returnUser("ADMIN");