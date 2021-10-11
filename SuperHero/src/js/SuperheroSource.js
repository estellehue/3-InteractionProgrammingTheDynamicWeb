import {BASE_URL, API_KEY} from './apiConfig';

const SuperheroSource = {
    apiCall(param) {
        return fetch(`${BASE_URL}/${API_KEY}/${param}`)
            .then(res => res.text()).then(text => JSON.parse(text))
            .catch(err => console.log(err));
    },
    getSuperheroById(id) { 
        return this.apiCall(id);       
    },
    getSuperheroByName(name){
        let st = "search/" + name; 
        return this.apiCall(st); 
    }
}
export default SuperheroSource;