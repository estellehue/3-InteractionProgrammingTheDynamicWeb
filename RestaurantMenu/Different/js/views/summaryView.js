//JSX, no return-statement needed since its really just one line
const SummaryView = ({guests, dishes, ingredients,  nav:[navCallback, navLabel], h}) => 
     <div class="summary" title="summary">
         <div  class="btn"><button onClick={navCallback}> {navLabel} </button></div>
                <div>Dinner for {guests} guests </div> 
                    <div class="totalOrder">{dishes.map( dish=> <li key={dish.id}> 
                        {dish.title}
                    </li>)}</div>
                       
                    <div>
                        <table class="addedIngredient"><tbody><tr><th>Ingredient</th><th>Aisle</th><th>Quantity</th></tr>
                            {ingredients.sort(compareIngredients).map( ingred=>
                            <tr key={ingred.id}>
                                <td class="ingTitle">{ingred.name}</td>
                                <td class="ingType">  {ingred.aisle}</td>
                                <td class="ingAmount"> {(ingred.amount * guests).toFixed(2)}</td>
                            </tr>)}
                        </tbody></table>           
                    </div>
                
            </div>;

function compareIngredients(a,b){
    if(a.aisle < b.aisle)
	   return -1;
    else if(a.aisle > b.aisle)
        return 1;
    
    if(a.name < b.name)
	   return -1;
    else if(a.name > b.name)
        return 1;
    else if(a.name === b.name)
        throw "there's a bug in the shopping list";
}


