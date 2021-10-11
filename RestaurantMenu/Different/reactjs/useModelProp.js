function useModelProp(model, prop) {// ordinary func, not component! 
    const [propValue, setPropValue] = React.useState(model[prop]);
    
    React.useEffect(function(){ 
       const obs = () => setPropValue(model[prop]);
       return model.addObserver(obs); 
    }, [model, prop]); 
    
    return propValue;
}
