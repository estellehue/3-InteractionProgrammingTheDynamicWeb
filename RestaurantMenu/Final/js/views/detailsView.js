const DetailsView=({dish, guests, dishAdded, addLabel, isDishInMenu, cancel, h}) => 
        <div key="details" class="details">
            <div class="detailsHeader">
                <div><span class="likeIcon"><img src="img/like.png"/></span>
                <span class="likes">{dish.aggregateLikes}</span></div>
                <div class="btnCancel"><button onClick={cancel[0]}>Cancel</button></div>
            </div>
                <div>
                <div class="title">{dish.title}</div>
                <div class="addBtn"><button onClick={dishAdded} disabled={isDishInMenu}> {addLabel} </button></div></div>
         
            <div class="detailedDishImg"><img src={dish.image}/></div>
                
            <div class="price">
                <span>
                    Price: {dish.pricePerServing} SEK
                </span>
                <span>
                    Price for {guests} guests: {(dish.pricePerServing * guests).toFixed(2)} SEK
                </span>                       
             </div>    

             <div class="part">Ingredients:
                    {dish.extendedIngredients.map(ing=>
                    <li key={ing.name}>{ing.name + ": " + ing.amount + " " + ing.unit}</li>)}
              </div>  
                                                  
              <div class="part">How to:
                    <div>{dish.instructions}</div>
              </div>  
                                                  
              <div>
                    <a href= {dish.sourceUrl}> More Information </a>
              </div>    
      </div>;
