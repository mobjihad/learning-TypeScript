type Tuser<T> = Array<T>; 


const u1 : Tuser<string> = ["3","4"];

const u2: Tuser<number> = [2,3,4,5];

const u3: Tuser<boolean> = [true,false];


type THam = {
    
    name: string ;
    Call: string;
    year: string;

}


const DB : Tuser<THam> = [

    {
        name:"Seyam",
        Call:"S21HMX",
        year:"2023"
    },
    {
        name: "Rabby",
        Call: "S21RC",
        year: "1999"
   
    }
]


function add<T>(num1: T , num2:T):T{

    return num1; 
}

type Tcoordinates<T,Y> = [T , Y ];

const coordinates: Tcoordinates<number, number> = [2,3] ; 