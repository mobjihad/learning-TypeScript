
//normal function 


function adduser(number1: number , number2:number): number {

        return number1+number2 ;

}

let result = adduser(56,4);

console.log(result);


// arrow

const addNumber = (num1: number , num2 : number): number => {

                    return num1+ num2 
}

let res = addNumber(56,4);

console.log(res);


// method - function in an object 



const data = {


    call: "MOB",


     callSign (prefix : string ): string {

        return prefix + this.call; 
    }
}; 

const callsign = data.callSign("S2") ;  

console.log(callsign);

//callback 

const arr : number[] = [12,40,69,10 ];

const re = arr.map((elem:number): number =>{

        return elem*elem
})

console.log(re);