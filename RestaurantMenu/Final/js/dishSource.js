const DishSource = {
   apiCall(params) {
	return fetch(BASE_URL + params , {
            "method": "GET",
            "headers": {
		      'X-Mashape-Key' : API_KEY
            }
	}).then(handleHTTPError).then(response => response.json()).catch(console.error);
   },
    searchDishes(searchParams) { 
        
        return this.apiCall("recipes/search?" + new URLSearchParams(searchParams)).then(data=>data.results);       
    },
    getDishDetails(id){
        let st = "recipes/" + id + "/information";
        return this.apiCall(st).then(data=>data); 
    }
}; 

function handleHTTPError(response) {
  if(response.ok)
     return response;
  throw Error(response.statusText);
}