
function Sidebar({model, dishChoice, dishChoiceRoute}) {
    const guests = useModelProp(model, "numberOfGuests");
    const dishes = useModelProp(model, "dishes");
    
    return h(SidebarView, {
           guests, 
           setGuests: n => model.setNumberOfGuests(n),
           dishes,
           removeDish: dish => model.removeFromMenu(dish),
           dishChosen: dishId=> {
                        model.setCurrentDish(dishId);
                        dishChoice();
                    },
           dishChoiceRoute
        });
}
