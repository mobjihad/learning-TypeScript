class User {

        Name:string;
        Email:string;
        phone:string;
        Age: number;
        username: string;

        constructor(Name: string , Email: string , phone: string, Age: number, username:string){

            this.Name = Name; 
            this.Email= Email;
            this.phone = phone;
            this.Age = Age; 
            this.username = username;

        }


        getUsername (){

        
            console.log(`Account Created for ${this.username}`);

        }

}

const user1 = new User("Seyam","s@mail.com","0170000000",25,"seyam");

console.log(user1);

user1.getUsername();


class persona {

   
     constructor(public name: string , public username: string){
            this.name = name ;
            this.username = username;
     }
   

}