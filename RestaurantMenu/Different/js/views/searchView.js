const SearchFormView=({onSearch, onType, onText, nav:[navCallback, navLabel], h})=> 
     <div class="searching"> 
         <div class="backToSumBtn"><button onClick={navCallback}>{navLabel}</button></div> 
 
        <input class="search" name="query" placeholder="Search for dish.." onChange={onText}/>

        <select class="search" name="type" onChange={onType}>
            <option key="choose one" value="">choose one</option>
            {["starter", "main course", "dessert"].map(k=> 
            <option key={k}>{k}</option>)}
        </select>
        <button class="search" onClick={onSearch}>Search</button>
       
      </div>;

const SearchResultsView = ({searchResults, dishChosen, h})=>
    <div class="enclosingSearchResult">{ 
    
    searchResults.map(dish=>
      <span key={dish.id} class="searchResult" onClick={()=> dishChosen(dish.id)}>
            <div>{dish.title}</div>
            <div><img src={`https://spoonacular.com/recipeImages/${dish.image}`}/></div>   
      </span>
        
)
} </div>;