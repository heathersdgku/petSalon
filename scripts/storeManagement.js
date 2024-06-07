function saveItem(item){
    let items = readItems();
    items.push(item);//push the new item to the array
    let val = JSON.stringify(items);//parse the array into JSON string
    console.log(val);//displays the string
    localStorage.setItem("services",val);//send the val to the LS

}

function readItems(){
    let data = localStorage.getItem("services");//getting the vals from the LS
    if(!data){// not data?
        return [];//create array
    }else{
        let list = JSON.parse(data);//parse back into array
        return list;
    }
}