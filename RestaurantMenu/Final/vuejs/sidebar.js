const Sidebar = {
    props: ["model", "dishChoice", "dishChoiceRoute"],
    render(h){      
       const  {model, dishChoice, dishChoiceRoute} = this;
       return SidebarView({
            h,
            guests: model.getNumberOfGuests(),
            dishes: model.getMenu(),
            setGuests: x=> model.setNumberOfGuests(x), 
            removeDish: dish => model.removeFromMenu(dish),
            dishChosen: dishId=> {
                        model.setCurrentDish(dishId);
                        dishChoice();
                    },
            dishChoiceRoute
          });
     }
}
