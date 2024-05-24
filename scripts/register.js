let petSalon ={
    name:"The Fashion Pet",
    phone:"666-666-6666",
    hours:{
        open:"9:00am",
        close:"9:00pm"
    },
    pets:[
        {
            name:"Scooby",
            age:1,
            gender:"Male",
            service:"Grooming",
            breed:"Labrador"
        },
        {
            name:"Scrappy",
            age:5,
            gender:"Female",
            service:"Vaccines",
            breed:"Pug"
        },
        {
            name:"Frodo",
            age:11,
            gender:"Male",
            service:"Grooming",
            breed:"Shepherd"
        }
    ]
}

function displayNames(){
    let names="";
    for (let i=0;i<=3;i++){
        names+=`<p> ${petSalon.pets[i].name} </p>`;
        console.log(names);
    }
    document.gelElementById("petNames").innerHTML=names;
}
function countPets(){
    console.log(petSalon.pets.length);
}