

const getUser = (input : string | null)=>{
   
    if(input){
        console.log(`From DB ${input}`); 
    }else{

        console.log(`From DB ALL User`);
    }
}

getUser(null);


const discountCalculator = (input : unknown) =>{

        if(typeof input ==="number"){

            console.log(input*0.1);
        }else if(typeof input==="string"){

            let price = input.split(" ");
            console.log(price);
            const [finalPrice] = price;
            console.log(Number(finalPrice)*0.1);

        }else{
            console.log("Wrong Input");
        }

}

discountCalculator(100);
discountCalculator("100 TK Mal");
discountCalculator(null); 



const throNewError= (msg: string): never =>{

    throw new Error(msg);
    
}

throNewError("Error");