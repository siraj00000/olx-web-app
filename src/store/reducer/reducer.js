const INITIAL_STATE = {
    set_state : [
        {
            name: 'siraj',
            email: 'siraj00000ahmed@gmail.com'
        }
    ],
    logedInUsers: [],
    currentUser: null
}


export default (state = INITIAL_STATE , action) => {
    switch (action.type) {
        case 'Credentials':
            return {
                ...state,
                set_state: [...state.set_state, action.payload]
            }
                ;
        case 'user': 
            return {
                ...state,
                currentUser: action.payload
            } ;       
        case 'logedInUsers': 
            return {
                ...state,
                logedInUsers: action.payload
            }        

        default: return state;
    }
}
