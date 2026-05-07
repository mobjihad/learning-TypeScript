
const HAMDb = {

    country: "ALL DXCC",
    S2 : {

        ITU: 42,
        CQ: 22,
        prefix: "S2"
    },
    DXCC: 122 



}

const {S2:{prefix : pref}} = HAMDb;
const {country} = HAMDb;

console.log(country);
console.log(pref);


const HamsWithNoClub = ["S21AM", "S21RC", "S21YLJ", "S21MOB"];


const [A,B,C,MOB] = HamsWithNoClub; 
const [,RC] = HamsWithNoClub; 
const [AM]= HamsWithNoClub;

console.log(RC);
console.log(MOB);
console.log(AM);