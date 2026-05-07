class UserDb {

    Name:string;
    Phone: string;

    constructor(name:string , Phone: string){

        this.Name= name; 
        this.Phone = Phone; 
    }


    getUser(){
        console.log("Please get a license or SWL");
    }


}


class HAMS extends UserDb {

    Call: string;
    Year: string; 

    constructor(Name: string , Phone: string , Call: string , Year: string ){

        super(Name, Phone);
        this.Call = Call;
        this.Year = Year; 
    }


    getDetails(){

        console.log(` Welcome ${this.Name} Your callsign is ${this.Call} and your license year ${this.Year}`); 
    }
}


class SWL extends UserDb {

    SDR: string ; 
    experience: string ;

    constructor(Name: string , Phone: string , SDR: string , experience: string){

        super(Name, Phone);
        this.SDR = SDR; 
        this.experience = experience; 
    }

    getDetails(){

        console.log( `${this.Name} Has ${this.experience} years of SWL experience using ${this.SDR} SDR`); 
    }
}




const ham1 = new HAMS("Jihad", "000111999", "S21MOB", "2023");
const swl1 = new SWL("Ivan", "0990000", "Pluto","20");
const u1 = new UserDb("User","000999888");



const HamCheck= (user: UserDb)=>{

   return user instanceof HAMS ; 
}

const SwlCheck = (user: UserDb) => {

    return user instanceof SWL ; 
}


const getData= (user: UserDb) => {

    if(HamCheck(user)){
        user.getDetails();
    }else if(SwlCheck(user)){
        user.getDetails();
    }else{

        user.getUser();
    }

}

getData(ham1);
getData(swl1);
getData(u1);