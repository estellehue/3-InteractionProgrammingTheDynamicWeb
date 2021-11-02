/*eslint-env es6*/
/*eslint no-console: "error"*/
class DinnerModel{
    constructor(guests=2, dishes=[], currentDish=null){
        this.subscribers = [];
        this.dishes = dishes;
        this.numberOfGuests = guests;
        this.currentDish = currentDish;
        
        this.getingredient();
    }
    

    getingredient(){
        let ingredients = [];
        this.dishes.map(dish => dish.extendedIngredients.forEach(ing => ingredients = [ing, ...ingredients]));

        let updatedIngredients = ingredients.reduce(function(accumulator, currentDish){
            if(!accumulator.find(ing => ing.id === currentDish.id)){
                let ie = { id: currentDish.id, 
                          name: currentDish.name, 
                          aisle: currentDish.aisle, 
                          amount: currentDish.amount};
                accumulator = [ie, ...accumulator];
            }
            else{
                const index = accumulator.findIndex(ing => ing.id === currentDish.id);
                accumulator[index].amount += currentDish.amount;
            }
        return accumulator;
        }, [])

        return [...updatedIngredients];
    }
    
    setNumberOfGuests(x){
       if(x < 1) 
        throw "Number of dinner guests cannot be zero or negative";
        this.numberOfGuests = x;  
        this.notifyObservers();
    }
    
    getNumberOfGuests(){
        
        return this.numberOfGuests;
    }
    
    addToMenu(dish){
       if(this.dishes.find(element => element.id === dish.id))
            throw "Dish is already added to menu";
    else{
        this.dishes=[dish, ...this.dishes];
        this.notifyObservers();
    }
        
    }
    
    removeFromMenu(dish){
        this.dishes = [...this.dishes.filter(d => d.id !== dish.id)];
        this.notifyObservers();
    }
    
    getMenu(){
        return [...this.dishes];
    }
    
    setCurrentDish(id){
        this.currentDish = id;
        this.notifyObservers();
    }
    
    getCurrentDish(){
        return this.currentDish;
    }
    
    addObserver(obs){
        //FOR MULTICAST NOTIFICATION
        this.subscribers = this.subscribers.concat(obs);
        
        return ()=>this.removeObserver(obs); //cleanup
    }
    
    notifyObservers(){
        this.subscribers.forEach(subscriber => subscriber());
        
    }
    
    removeObserver(obs){
      this.subscribers= this.subscribers.filter(o=> o !== obs); 
    }
}


