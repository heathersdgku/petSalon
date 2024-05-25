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
            </div>
        `;
    }
    petDiv.innerHTML=card;
    //insert template into html
}

function displayRows(){

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
}

//note: add this display.js file linked to register html