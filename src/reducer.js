const initialState = {    
    page: '',
    jsonObj : {}   
     
}

const reducer = (state = initialState ,action) => {
    console.log(state);
    console.log(action);
    switch(action.type) {
        case "Login" :
            return Object.assign({},state ,{ page: 'Login', jsonObj :action.data});
        case "SignUp" :
            return Object.assign({},state ,{ jsonObj :action.data});
        case "Fetch" : 
            return state;
        default: return state;
    }
    //return state;
}
export default reducer;