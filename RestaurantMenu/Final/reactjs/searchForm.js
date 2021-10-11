  const SearchFormReact=({onSearch, nav:[navCallback, navLabel]})=>{ 
    const [type, setType]= React.useState("");
    const [query, setQuery]= React.useState("");
      
    return <div class="searching">
         <div class="backToSumBtn"><button onClick={navCallback}>{navLabel}</button></div> 
 
        <input class="search" name="text" placeholder="Search for dish.." onChange={onQuery => setQuery(onQuery.target.value)}/>

        <select class="search" name="type" onChange={onType=> setType(onType.target.value)}>
            <option key="choose one" value="">choose one</option>
            {["starter", "main course", "dessert"].map(k=> 
            <option key={k}>{k}</option>)}
        </select>
        <button class="search" onClick={e=> onSearch(type, query)}>Search</button>
       
      </div>;   
}