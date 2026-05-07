

const queryDb = <X>(obj : X , key : keyof X ) => {

        return obj[key] ; 

}


const Biscuit = {

    dia: 89, 
    sweet: true , 
    crust: "thick",
    salty: true

}

const chocolate = {

    brand: "Kitkat",
    taste: "Sweet",
    size: "XL"
}

const rr1 = queryDb(Biscuit,"sweet");
const rr2 = queryDb(chocolate, "size"); 

console.log(rr1);
console.log(rr2);