const Details={
  props:["model", "ok", "cancel"],
  data(){
     return {
       promise: null,
       data:null, 
       error:null 	
      };
    },
    watch:{
        'model.currentDish': {
           immediate:true,
           handler(){
              this.promise=this.model.currentDish && DishSource.getDishDetails(this.model.currentDish);
              this.data=null;   
              this.error=null;
              // if we have a promise, we subscribe to it;
                  if(this.promise)
                      this.promise.then(dt=> this.data=dt).catch(err=> this.error= err);
           }
        }
    },
    render(h){ 
       return promiseNoData(this.promise, this.data, this.error, h) ||
              DetailsView({
                h, 
                dish: this.data,
                guests: this.model.getNumberOfGuests(),
                dishAdded: () => {
                    this.model.addToMenu(this.data); 
                    this.ok[0]();
                },
                addLabel: this.ok[1],
                isDishInMenu: this.model.dishes.find(element => element.id === this.data.id),
                cancel: this.cancel});
    } 
};
