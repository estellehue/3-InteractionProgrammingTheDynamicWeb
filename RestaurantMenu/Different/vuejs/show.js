const Show={
    props:["hash"],
    data(){ return {counter:1}},
    mounted(){
        this.listener= e=> this.counter= this.counter+1; //increment a counter to provoke re-render
        window.addEventListener("hashchange", this.listener);
    },
    destroyed(){
        window.addEventListener("hashchange", ()=> {});
    },
    render(h){
        this.counter;  // mention to force re-render!
        return this.hash===window.location.hash? this.$slots.default : false;   
    }
};
