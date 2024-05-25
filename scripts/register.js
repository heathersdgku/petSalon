let petSalon ={
    name:"The Fashion Pet",
    phone:"666-666-6666",
    hours:{
        open:"9:00am",
        close:"9:00pm"
    },
    pets:[]
}
//constructor
function Pet(n,a,g,b,s,t){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.breed=b
    this.service=s;
    this.petType=t;
}

function isValid(aPet){
    let validation=true;

    if(aPet.name==""){
        validation=false;
        document.getElementById("txtName").classList.add("alert-error");
    }
    if(aPet.service==""){
        validation=false;
        document.getElementById("txtService").classList.add("alert-error");
    }
    return validation;
}

function register(){
    let inputName=document.getElementById("txtName").value;
    let inputAge=document.getElementById("txtAge").value;
    let inputGender=document.getElementById("txtGender").value;
    let inputBreed=document.getElementById("txtBreed").value;
    let inputService=document.getElementById("txtService").value;
    let inputPetType=document.getElementById("txtPetType").value;

    let newPet= new Pet(inputName,inputAge,inputGender,inputBreed,inputService,inputPetType);
    if(isValid(newPet)){
        petSalon.pets.push(newPet);
        displayCards();
        displayTotalPets();
        displayServiceCount()
    }
}

function init(){
    let pet1 = new Pet("Frodo", 7, "Male", "Labrador","Grooming", "Dog");
    let pet2 = new Pet("Kona", 2, "Female", "Labrador","Vaccines", "Dog");
    petSalon.pets.push(pet1,pet2);
    displayCards();
    displayTotalPets();
    displayServiceCount()
}

window.onload=init;//waiting to render the html