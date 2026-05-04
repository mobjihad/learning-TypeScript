//array , tuple 

let studentNames : (number | string)[]= ["Jihad", 26, "Seyam", 30, 30, "Babu"];

studentNames.push(90);

let subCode : [string,number] = [ "CSE", 90]; 

subCode[0] = "AST";


// reference type = Object 

const user : {

        name: string;
        Call: string;
        Lyear: string ; 
        readonly prefix: string;
        age: number;
        radiobrand?: string; 

} ={

    name: "Seyam",
    Call: "S21HMX",
    Lyear: "2023",
    prefix: "S2",
    age: 25

}


console.log(user);