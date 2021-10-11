function Search({model, nav, resultChoice}){
    const [promise, setPromise]= React.useState(null); 
    const [data, error]= usePromise(promise);
    
    React.useEffect(() => setPromise(DishSource.searchDishes({})), []); 
    //console.log(promise);
    
    return h(React.Fragment, {},
                h(SearchFormReact, {
                    onSearch: (type, query)=>{
                        setPromise(DishSource.searchDishes({type, query}))
                    },
                    nav
                }),
                promiseNoData(promise, data, error)  ||
                h(SearchResultsView, {
                    searchResults: data,
                    dishChosen: dishId=> {
                        model.setCurrentDish(dishId);
                        resultChoice();
                    }
                    
                })
            );
}

/*
const [text, setText]= React.useState("");
    const [type, setType]= React.useState("");
h(SearchFormView, {
                    onText: q=> setQuery(q.target.value),
                    onType: t=> setType(t.target.value),
                    onSearch: ()=> setPromise(DishSource.searchDishes({type, query})),
                    nav
                })
*/