const Summary= {
    functional:true,
    render(h, context){
        //const  {model, nav} = this;
        const {model, ...props} = context.props;
        return SummaryView({ 
            h,
            guests: model.getNumberOfGuests(), 
            setGuests: n => model.setNumberOfGuests(n),
            dishes: model.getMenu(),
            ingredients: model.getingredient(),
            ...props
        });
    } 
}
