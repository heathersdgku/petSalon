function displayCards(){
    //declare the vars
    let card="";
    const petDiv=document.getElementById("petDiv");
    //travel the array of pets
    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        //create the html template
        card+=`
            <div class="petDiv">
                <h4>${pet.name}</h4>
                <p>${pet.age}</p>
                <p>${pet.gender}</p>
                <p>${pet.breed}</p>
                <p>${pet.service}</p>
                <p>${pet.petType}</p>
                <button class="btn btn-danger" onclick="deletePet()">Delete</button>
            </div>
        `;
    }
    petDiv.innerHTML=card;
    //insert template into html
}

function displayRows(){
    const petTable=document.getElementById("petTable");
    petTable.innerHTML= "";
    for (let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        let row = `
        <tr>
        <td>${pet.name}</td>
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.breed}</td>
        <td>${pet.service}</td>
        <td>${pet.petType}</td>
        <td><button class="btn btn-danger" onclick="deletePet(${i})">Delete</button></td>
        </tr>
        `;
        petTable.innerHTML+=row;
    }
}

function displayTotalPets(){
    document.getElementById("total").innerHTML=petSalon.pets.length;
}

function displayServiceCount(){
    let grooming=0;
    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        if(pet.service=="Grooming"){
            grooming++;
        }

    }
    document.getElementById("totalGrooming").innerHTML=grooming;

    let vaccines=0;
    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        if(pet.service=="Vaccines"){
            vaccines++;
        }

    }
    document.getElementById("totalVaccines").innerHTML=vaccines;
    let dogs=0;
    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        if(pet.petType=="Dog"){
            dogs++;
        }

    }
    document.getElementById("totalDogs").innerHTML=dogs;
    let cats=0;
    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        if(pet.petType=="Cat"){
            cats++;
        }

    }
    document.getElementById("totalCats").innerHTML=cats;
    let other=0;
    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        if(pet.petType=="Other"){
            other++;
        }

    }
    document.getElementById("totalOther").innerHTML=other;
}


//note: add this display.js file linked to register html