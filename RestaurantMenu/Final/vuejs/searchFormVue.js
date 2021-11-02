const SearchFormVue= {
  props: ["onSearch", "nav"],
  data(){  return { query:"", type:""};    }, 
  render(h){ 
      return <div class="search">
            <div class="summaryButton"><button onClick={this.nav[0]}>{this.nav[1]}</button></div>
                <input name="text" type="text" placeholder="Search for dish.." onChange={x=> this.query=x.target.value} />
                <select name="type" onChange={x=> this.type=x.target.value}>
                    <option value="">choose one</option>
                        {["starter", "main course", "dessert"].map(k=> <option key={k} > {k} </option>)} 
                </select>  
                <button onClick={e=> this.onSearch(this.type, this.query)}>Go</button>      
            </div>
           }
}