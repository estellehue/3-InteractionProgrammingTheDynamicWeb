function promiseNoData(promise, data, error, h){  
     return  !promise && "no data"     // case "0"  
           || error && <h1>{error}</h1>   
           || !data && <img src="http://www.csc.kth.se/~cristi/loading.gif"/>     // case 1
}

           //add h