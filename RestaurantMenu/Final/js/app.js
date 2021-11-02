/*eslint-env browser*/
/*global console*/
/*<div><Search/></div>*/

const summaryNav=[()=> window.location.hash="summary", "Summary"];
const backToSearch=[()=> window.location.hash="search", "Back to search"];
const addToMenu=[()=> window.location.hash="search", "Add to menu"];
const dishChoice = ()=>window.location.hash="details";

const App = ({model, h}) => 
   <div class="flexParent">
     <div class="sidebar"><Sidebar dishChoiceRoute="#details" model={model} dishChoice={dishChoice}/></div>

    <div class="mainContent">
         <Show hash="#summary"><Summary model={model}  nav={backToSearch} /></Show>
         <Show hash="#search"><div class="debug"><Search model={model} nav={summaryNav} resultChoice={dishChoice}/></div></Show>
         <Show hash="#details"><div class="debug"><Details model={model} ok={addToMenu}  cancel={backToSearch} /></div></Show>
    </div>

</div>;

function defaultRoute(){
  if(! ["#search", "#summary", "#details"].find(knownRoute=>
           knownRoute===window.location.hash))
  window.location.hash="#search";
}defaultRoute();