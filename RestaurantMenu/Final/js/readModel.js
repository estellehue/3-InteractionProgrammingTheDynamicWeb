function readModel() {
    const modelString= localStorage.getItem("dinnerModel");
    let modelObject= JSON.parse(modelString);
    if(!modelObject)
        modelObject = {};
    
    const model = new DinnerModel(modelObject.guests, modelObject.dishes, modelObject.currentDish);
    
    model.addObserver(()=> localStorage.setItem("dinnerModel", JSON.stringify({
                guests: model.getNumberOfGuests(), 
                dishes: model.getMenu(),
                currentDish: model.getCurrentDish()})));
    
    return model;
}