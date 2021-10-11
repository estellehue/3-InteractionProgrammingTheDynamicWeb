const SidebarView=({guests, setGuests, dishes, removeDish, dishChosen, dishChoiceRoute, h})=>
<div class = "sidebarview">
    <div>Set number of guests</div>
     <button onClick={ () => setGuests(guests-1)} 
        disabled={guests === 1}>-</button> 
        {guests}
     <button onClick={ () => setGuests(guests+1)}>+</button> 

    <div class="addedDish">
         <table class="dishTable"><tbody><tr><th>Menu</th><th>Dish</th><th>Type</th><th>Price</th></tr>
            {dishes.sort(compareDishes).map( dish=>
            <tr key={dish.id}>
                <td><button onClick={e=> removeDish(dish)}>x</button></td>
                <td class="dishTitle"><a href={dishChoiceRoute} onClick={()=> dishChosen(dish.id)}>{dish.title}</a></td>
                <td class="dishType">  {dishType(dish)}</td>
                <td class="dishPrice"> {(dish.pricePerServing * guests).toFixed(2)} SEK</td>
            </tr>)}
            <tr>
                <td></td>
                <td class="dishTitle">Total:</td>
                <td></td>
                <td class="dishPrice">{(dishes.reduce(totalPrice, 0) * guests).toFixed(2)} SEK</td>
            </tr>
        </tbody></table>
    </div>

</div>;

const types=["starter", "main course", "dessert"];
function dishType(dish){
    const tp= dish.dishTypes.filter(value => types.includes(value));
    if(tp.length){
         return tp[0];
    }
	   
    return "";
}

function compareDishes(a,b){
    let ai= types.indexOf(dishType(a));
    let bi= types.indexOf(dishType(b)); 
    return  ai < bi && -1
            || ai > bi && 1
            || ai === bi && 0
}

function totalPrice(total, dish){
    return total += dish.pricePerServing;
}