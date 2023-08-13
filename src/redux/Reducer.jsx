const initialState = {
    id:null,
}
const SET_Id = (state = initialState,action)=>{
    switch(action.type){
        case 'SET_ID':
            return state={
                id:action.payload
            };
            default:
                return state;
    }
}
export default SET_Id ;