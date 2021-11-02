const Search={
    props: ["model","nav", "resultChoice"],
    data(){
        return { 
            promise: DishSource.searchDishes({}), 
            data: null, 
            error:null,
            query: "", 
            type: ""
        };
    },
    created(){
	  this.promise.then(dt=> this.data = dt)
                    .catch(err=> this.error =err);
    },
    render(h){
        return h("div", {},
          [
                h(SearchFormVue,{
                  props:{onSearch: (type, query)=> {
                            this.promise = DishSource.searchDishes({type: type, query: query}),
                            this.data = null,
                            this.error = null,
                            this.promise.then(dt=>this.data=dt).catch(er=>this.error=er)},
                         nav: this.nav}
               }),
                promiseNoData(this.promise, this.data, this.error, h) || 
                   SearchResultsView( {
                       h,
                       searchResults: this.data,
                       dishChosen: dishId=> {
                       this.model.setCurrentDish(dishId);
                       this.resultChoice();
                    }})
           ])
                 
    }
}

/*
SearchFormView({
                  h,
                  onText: x=> this.query= x.target.value,
                  onType: y=> this.type = y.target.value,
                  onSearch: ()=>{ 
                        this.promise = DishSource.searchDishes({type: this.type, query: this.query}),
                        this.data = null,
                        this.error = null,
                        this.promise.then(dt=> this.data = dt)
                    .catch(err=> this.error =err)
                        },
                        nav: this.nav
                })
                */
