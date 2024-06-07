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
        displayServiceCount();
        displayRows();
    }
}

function deletePet(index){
    petSalon.pets.splice(index,1);
    displayCards();
    displayTotalPets();
    displayServiceCount();
    displayRows();
}

function getServices(){
    //read the LS to get the services
    let serviceList = readItems();
    let option = "";
    //travel the array of services
    for (let i = 0; i < serviceList.length; i++) {
        //create the <option> on the html
        option= `<option> ${serviceList[i].description} ${serviceList[i].description} </option> `;
        //insert the <option> into the html select
        $("txtService").append(option);
    }
}

function init(){
    let pet1 = new Pet("Shiloh", 11, "Female", "Beagle","Grooming", "Dog");
    let pet2 = new Pet("Kona", 2, "Female", "Orange","Vaccines", "Cat");
    let pet3 = new Pet("Dawg", 7, "Male", "Labrador","Grooming", "Dog");
    petSalon.pets.push(pet1,pet2,pet3);
    displayCards();
    displayTotalPets();
    displayServiceCount();
    displayRows();
}

window.onload=init;//waiting to render the html