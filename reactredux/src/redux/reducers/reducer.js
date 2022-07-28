const Initial_State={
    User_data:[]
}
const todoreducers=(state=Initial_State,action)=>{
    switch(action.type){
        case "ADD_DATA":
            return{
                ...state,
                User_data:[...state.User_data,action.payload]
            }

        case "REMOVE_DATA":
            const dltdata=state.User_data.filter((el,i)=> i !==action.payload)
            return {
                ...state,
                User_data:dltdata
            }

        case "UPDATE_DATA":
            const updatedata=state.User_data.map((el,i)=>i===action._id?action.payload:el)
             return {
               ...state,
               User_data: updatedata
             };

        }
    return state;
}

export default todoreducers;