
const kgToGramConverter = (input : string | number) : number |string | undefined =>{


            if(typeof input ==="number"){

                return input*1000; 
            }else if(typeof input ==="string"){

                const [value] = input.split(" ");
                return `Converted Unit : ${ Number(value) * 1000} ` ; 
            }

}


const result1 = kgToGramConverter(10) as number;
const result2 = kgToGramConverter("10 KG") as string;  

console.log(result1);
console.log(result2);