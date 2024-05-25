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
function Pet(n,a,g,s){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.service=s;
}

function register(){
    let inputName=document.getElementById("txtName").value;
    let inputAge=document.getElementById("txtAge").value;
    let inputGender=document.getElementById("txtGender").value;
    let inputBreed=document.getElementById("txtBreed").value;
    let inputService=document.getElementById("txtService").value;
    let inputPetType=document.getElementById("txtPetType").value;

    let newPet= new Pet(inputName,inputAge,inputGender,inputBreed,inputService,inputPetType);
    petSalon.pets.push(newPet);
    console.log(petSalon.pets);
}

function init(){
    let pet1 = new Pet("Frodo", 7, "Male", "Labrador","Grooming", "Dog");
    let pet2 = new Pet("Kona", 2, "Female", "Labrador","Vaccines", "Dog");
    petSalon.pets.push(pet1,pet2);
    console.table(petSalon.pets);
}

window.onload=init;//waiting to render the html