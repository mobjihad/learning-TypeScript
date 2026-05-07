
enum userRole  {

    Admin= "Admin",
    User = "User", 
    Guest = "Guest", 

}


const returnRole = (role: userRole) => {

        if(role === userRole.Admin){
            
            console.log("Admin");
        }else if(role=== userRole.User){

            console.log("User"); 
        }else {

            console.log(userRole.Guest);
        }

}


returnRole(userRole.Admin);
returnRole(userRole.User); 