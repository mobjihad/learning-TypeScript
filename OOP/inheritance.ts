class user {

    Name: string;
    Username: string;
    Mail: string; 


    constructor(Name: string, Username: string , Mail: string){

        this.Name = Name;
        this.Username= Username;
        this.Mail = Mail;
        
    }
}



class HAM extends user{

    Call: string;
    Lyear: string;
    Lclass?: string;


    constructor(Name: string , username: string , mail: string , call: string , Lyear: string , Lclass : string ){

            super(Name, username, mail)
            this.Call = call ;
            this.Lclass = Lclass ;
            this.Lyear = Lyear; 
    }


}

const Ham1 = new HAM("MOB","mob", "mob@mail.com", "S21MOB", "2023", "A");

console.log(Ham1);