function Details({model, ok:[addNav, addLabel], cancel}){ 
    const currentDish = useModelProp(model, "currentDish");
    const menu = useModelProp(model, "dishes");
    const [promise, setPromise]=React.useState();  
    
    React.useEffect(()=> 
                    setPromise(currentDish && DishSource.getDishDetails(currentDish)),
         [currentDish]
    );

    const [data, error]= usePromise(promise);
    const guests = useModelProp(model, "numberOfGuests");
   
    return promiseNoData(promise, data, error) || 
        h(DetailsView, {
                dish: data,
                guests,
                dishAdded: () => {model.addToMenu(data); addNav();},
                addLabel,
                isDishInMenu: menu.find(element => element.id === data.id),
                cancel
          });   
}
