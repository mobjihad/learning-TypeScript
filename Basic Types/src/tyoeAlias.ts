type Ham = {

        name:{

            firstName:string;
            middleName?:string;
            LastName: string;
        },
        callSign:{

            prefix:string;
            call:string;
            year:string;
        },
        age:number,
        gender: "Male" | "Female"

}

const user1: Ham = {

     name:{
        firstName:"Seyam",
        LastName:"Hasibul"

     },
     callSign:{
        prefix:"S21",
        call: "HMX",
        year: "2023" 
     },
     age: 25,
     gender:"Male"
}


type AddFunction = (num1: number , num2: number) => number ; 


const addNumber : AddFunction = (num1, num2 )=>{

    return num1+num2; 
}

console.log(user1);
console.log(addNumber(3,4));