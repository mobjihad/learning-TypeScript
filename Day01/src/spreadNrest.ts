

const S21HAMS = ["S2"];

const HamsWithNoClub = ["S21AM", "S21RC", "S21YLJ", "S21MOB"];

const HamsWithClub = ["S21FIA", "S21HMX", "S21RAK"];

S21HAMS.push(...HamsWithClub);

console.log(S21HAMS);


const hamdetailSingle = {

        name: "Seyam",
        age: 25,
        call: "S21HMX"
}

const hamdetailS2 = {

    name: "Maruf",
    age: 34,
    call: "S21FIA"
}

const HAM = {...hamdetailSingle}; 

console.log(HAM);





const sendInvite = (...names: string[])=>{

    names.forEach((friend:string)=>{

        console.log(`Sending Invite to ${friend}`); 
    })
}; 


sendInvite("MOB","Havoc","Jihad","Seyam","FIA","RC","AM")