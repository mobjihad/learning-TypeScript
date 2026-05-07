const createArrayWithTuple = <X,Y> (param1: X , param2: Y) :[X,Y] =>{

        return [param1,param2 ] 
                 
}

const reN = createArrayWithTuple(3,4);
const reS = createArrayWithTuple("Hello", "String");
const reM = createArrayWithTuple("Hellp", {Name:"MOB", Age:26}); 

console.log({reM,reN,reS});



const addHamstoDB = <T>(HamInfo : T) =>{

    return {
        DBName: "Ham Syndicate",
        ...HamInfo
    }
}





interface IHams<D=null,I=null,A=null> {

    Name:string;
    call:string;
    year:string;
    device:D; 
    IOTA?:I;
    antenna?:A ;
}


interface device{
    Brand: string;
    Model: string;
    outputPower: string;
} 


interface IOTA{

    AS: number;
    Grid: string;
    date: string;
}

interface antenna<B>{

    Homebrew: boolean;
    type: string;
    multiband:boolean;
    bands:B ; 
}

interface Ibands {

    [index: number] : number ; 
};


const Ham1NotPrivilleged1 : IHams<device> = {

    Name:"Seyam",
    call:"S21HMX", 
    year: "2023",
    device:{ Brand: "Ubitx",
    Model: "v4",
    outputPower: "50 W"}


}

const HAM2 : IHams<device, IOTA,antenna<Ibands>> = {

    Name:"Rabby",
    call:"S21RC", 
    year: "1999",
    device:{ Brand: "ICOM",
        Model: "7300",
        outputPower: "100 W"},
    
    IOTA:{
        AS: 140,
        Grid: "NL51",
        date: "10-21 December 2024",

    }


}


const Ham1 = addHamstoDB(Ham1NotPrivilleged1);
const Ham2 = addHamstoDB(HAM2);

console.log(Ham1);
console.log(Ham2); 
