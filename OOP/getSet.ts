class BankAcc {

    readonly UserID: string; 
    protected Balance: number;
    protected branch: string;
    
    constructor(UserID: string, Balance: number, branch: string){

            this.UserID = UserID; 
            this.Balance= Balance;
            this.branch = branch; 
    }



    set setBalance(bal: number ){

            this.Balance += bal; 
    }

    get getBal(){
        return this.Balance; 
    }

}


class studentAcc extends BankAcc{

    institution: string; 
    expiry: string; 

    constructor(UserID: string, Balance: number, branch: string , institution : string, expiry: string){

        super(UserID,Balance, branch);

        this.institution = institution; 
        this.expiry = expiry; 
    }
}


const b1 = new BankAcc("OA-0001", 200, "Gulshan");

b1.setBalance = 3000; 

console.log(b1.getBal);