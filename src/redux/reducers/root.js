const rootReducerDefaultState = { 
    status :'None' 
};

const rootReducer =  (state = rootReducerDefaultState,action) => {
    switch(action.type){
        case 'CHANGE':
            return({status:'changed'});
        default:
            return state;
    }
}


export default rootReducer;