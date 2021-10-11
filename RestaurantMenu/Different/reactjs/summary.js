function Summary({model, nav}){ 
    const guests = useModelProp(model, "numberOfGuests");
    const dishes = useModelProp(model, "dishes");
    
    return h(SummaryView, {
            guests, 
            setGuests: n => model.setNumberOfGuests(n),
            dishes,
            ingredients: model.getingredient(),
            nav
        });
} 

