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

interface bands {

    [index: number] : number  ;
};


const Ham1NotPrivilleged : IHams<device> = {

    Name:"Seyam",
    call:"S21HMX", 
    year: "2023",
    device:{ Brand: "Ubitx",
    Model: "v4",
    outputPower: "50 W"}


}

const HAM1 : IHams<device, IOTA,antenna<bands>> = {

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

console.log(HAM1);